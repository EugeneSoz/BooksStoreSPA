using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksStoreSPA.Data
{
    //базовый класс, от которого наследуются классы модели, имеющие id
    public class EntityBase
    {
        public long Id { get; set; }
    }
}
