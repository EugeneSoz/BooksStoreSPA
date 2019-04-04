﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BooksStoreSPA.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;

namespace BooksStoreSPA.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class BaseController : ControllerBase
    {
        public async Task<ActionResult> CreateAsync<T>(T entity, Func<T, Task> addMethod)
        {
            if (!ModelState.IsValid)
            {
                return Ok(GetServerErrors(ModelState));
            }
            try
            {
                await addMethod?.Invoke(entity);
            }
            catch (Exception ex)
            {
                ModelState.AddModelError(string.Empty, $@"Невозможно создать запись: {ex.Message}");
                return BadRequest(GetServerErrors(ModelState));
            }

            return Created("", entity);
        }

        public async Task<ActionResult> UpdateAsync<T>(T entity, Func<T, Task<bool>> editMethod)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(GetServerErrors(ModelState));
            }

            bool isOk;
            try
            {
                isOk = await editMethod?.Invoke(entity);
            }
            catch (Exception ex)
            {
                ModelState.AddModelError(string.Empty, $@"Невозможно сохранить запись: {ex.Message}");
                return BadRequest(GetServerErrors(ModelState));
            }

            if (!isOk)
            {
                return NotFound();
            }
            return Ok();
        }

        public async Task<ActionResult> DeleteAsync<T>(T entity, Func<T, Task<bool>> deleteMethod)
        {
            bool isOk;

            try
            {
                isOk = await deleteMethod?.Invoke(entity);
            }
            catch (Exception ex)
            {
                ModelState.AddModelError(string.Empty, $@"Невозможно удалить запись: {ex.Message}");
                return BadRequest(GetServerErrors(ModelState));
            }

            if (!isOk)
            {
                return NotFound();
            }
            return NoContent();
        }

        protected ValidationErrors GetServerErrors(ModelStateDictionary modelstate)
        {
            List<string> errors = new List<string>();
            foreach (ModelStateEntry error in modelstate.Values)
            {
                foreach (ModelError e in error.Errors)
                {
                    errors.Add(e.ErrorMessage);
                }
            }

            ValidationErrors v_errors = new ValidationErrors { Errors = errors }; 
            return v_errors;
        }
    }
}