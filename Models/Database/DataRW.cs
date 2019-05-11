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
            Dictionary<long, long> parentIds = new Dictionary<long, long>();
            data.ParentCategories.ForEach((Category p) =>
            {
                long oldId = p.Id;
                p.Id = 0;
                dataContext.Categories.Add(p);
                dataContext.SaveChanges();
                parentIds.Add(oldId, p.Id);
            });

            data.Books.ForEach(b =>
            {
                Category category = data.Categories.Find(c => c.Id == b.CategoryID);
                Publisher publisher = data.Publishers.Find(p => p.Id == b.PublisherID);

                b.Category = new Category
                {
                    Name = category.Name,
                    ParentCategoryID = parentIds[category.ParentCategoryID.Value]
                };

                b.Publisher = new Publisher
                {
                    Name = publisher.Name,
                    Country = publisher.Country
                };

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
