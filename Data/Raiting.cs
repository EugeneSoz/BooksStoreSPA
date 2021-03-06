﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksStoreSPA.Data
{
    //класс, описывающий рейтинг книги
    public class Raiting : EntityBase
    {
        //кол-во звёзв от 1 до 5
        public int Stars { get; set; }
        //отзыв
        public string Review { get; set; }
        //для какой книги рейтинг
        public long BookID { get; set; }
        public Book Book { get; set; }
    }
}
