import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styles: []
})
export class BookDetailsComponent implements OnInit
{

    constructor() { }

    ngOnInit()
    {
    }
//     [Parameter] protected string BookId { get; set; }
// [Inject] private StoreService StoreService { get; set; }
// [Inject] private IUriHelper UriHelper { get; set; }

//         public BookResponse Book => StoreService.Book;

//         protected override async Task OnParametersSetAsync()
// {
//     long id = long.Parse(BookId);
//     await StoreService.GetBookAsync(id);
// }

//         protected void OnReturnToStore()
// {
//     UriHelper.NavigateTo(Routes.GetRoute(nameof(Main)));
// }
}
