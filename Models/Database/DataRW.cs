using BooksStoreSPA.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BooksStoreSPA.Models.Database
{
    public class DataRW
    {
        //создать файл с данными
        public void CreateJsonData(StoreSavedData data, string fileName = "data")
        {
            string json = JsonConvert.SerializeObject(data);

            using (StreamWriter writer = File.CreateText($"Files\\SavedData\\{fileName}.json"))
            {
                writer.Write(json);
            }
        }

        public void SeedDataFromFile(StoreDbContext dataContext)
        {
            string categoryJson = GetDataFromJson("savedData");
            StoreSavedData data = JsonConvert.DeserializeObject<StoreSavedData>(categoryJson);

            data.Books.ForEach(b =>
            {
                b.Id = 0;
                b.Category = data.Categories.Find(c => c.Id == b.CategoryID);
                b.Publisher = data.Publishers.Find(p => p.Id == b.PublisherID);

                b.Category.Id = 0;
                b.Publisher.Id = 0;
                b.CategoryID = 0;
                b.PublisherID = 0;
            });

            dataContext.Books.AddRange(data.Books);
        }

        private string GetDataFromJson(string fileName)
        {
            StringBuilder result = new StringBuilder();

            using (StreamReader reader = File.OpenText($"Files\\DataForUpload\\{fileName}.json"))
            {
                while (reader.Peek() != -1)
                {
                    result.Append(reader.ReadLine());
                    result.AppendLine();
                }
            }

            result.Replace("\t", "    ");

            return result.ToString();
        }
    }
}
