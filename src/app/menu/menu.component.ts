import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.updateMenu();
  }


  updateMenu() {
    const menuArr = [
      ['Cold Deli Meat Spread', '$399.99', '<img src="assets/coldcuts.jpeg">'],
      ['Salty Meat Spread', '$699.99', '<img src="assets/meat.jpg">'],
      ['True Tough Spread', '$199.99', '<img src="assets/saltyspitoon.jpg">'],
      ['Weenie Hut Spreadk', '$999.99', '<img src="assets/vegan.jpg">'],
      ['Salty Tough Cannibal Spread', "$0.99", '<img src="assets/seafood.jpg">']
    ]

    const menu = document.querySelector('.menu-list')

    for (let i = 0; i < menuArr.length; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let j = 0; j < menuArr[i].length; j++) {
        const item = document.createElement('div');
        item.classList.add('food')
        item.innerHTML = menuArr[i][j];
  
        if (j === 2) {
          item.classList.add('itemImg');
        }
        row.appendChild(item)
      }
      menu.appendChild(row)
    }
  }
  

}
