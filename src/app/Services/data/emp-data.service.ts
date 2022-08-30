import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";


export class EmpDataService implements InMemoryDbService{

   

    constructor()
    {

    }

    createDb() {
        return {
            employeeList:[
                {FirstName:'Suyog',MiddleName:'Gopal',LastName:'Vyas',age:22,gender:'male',Details:['view','edit','delete'],city:"Gondia"},
                {FirstName:'Aman',MiddleName:'Shiv',LastName:'Sahu',age:22,gender:'male',Details:['view','edit','delete'],city:"Gondia"},
                {FirstName:'Mitesh',MiddleName:'Gopal',LastName:'Sakalkar',age:22,gender:'male',Details:['view','edit','delete'],city:"Gondia"},
                {FirstName:'Chinmay',MiddleName:'Prashant',LastName:'Deshkar',age:22,gender:'male',Details:['view','edit','delete'],city:"Gondia"},
                {FirstName:'Viplav',MiddleName:'Nitin',LastName:'Khode',age:22,gender:'male',Details:['view','edit','delete'],city:"Gondia"},
                {FirstName:'Sanket',MiddleName:'Sanjay',LastName:'Bhageria',age:22,gender:'male',Details:['view','edit','delete'],city:"Gondia"},
        
            ],
            productlist:[
                {productcode:1,productname:'Mobile',color:'black',price:25000,category:'Electronics',description:"Samsung Galaxy A51",instockquantity:5,image:'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a51-sm-a515-1.jpg'},
                {productcode:2,productname:'AC',color:'white',price:125000,category:'Electronics',description:"Hitachi",instockquantity:15,image:'https://rukminim1.flixcart.com/image/832/832/ky1vl3k0/air-conditioner-new/n/k/w/-original-imagadbmh2b8frm8.jpeg?q=70'},
                {productcode:3,productname:'Shoes',color:'blue',price:2500,category:'Fashion',description:"Puma Sneakers",instockquantity:5,image:'https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-960,/pub/media/catalog/product/f/b/fb7e570PMAPA37628801_1.jpg?rnd=20200526195200'},
                {productcode:4,productname:'Watch',color:'black',price:2000,category:'Fashion',description:"Sonata black",instockquantity:2,image:'https://staticimg.titan.co.in/Sonata/Catalog/87031PL02W_1.jpg?impolicy=pqmed&imwidth=640'},
                {productcode:5,productname:'T-Shirt',color:'black',price:2100,category:'Fashion',description:"Adidas Round neck T shirt",instockquantity:50,image:'https://pyxis.nymag.com/v1/imgs/a88/914/1abfe54a4c29e33a6a86c7cb386644d71c-7----.2x.rhorizontal.w600.jpg'},
                {productcode:6,productname:'Mobile',color:'black',price:15000,category:'Electronics',description:"Samsung Galaxy F41",instockquantity:5,image:'https://img4.gadgetsnow.com/gd/images/products/additional/large/G200695_View_1/mobiles/smartphones/samsung-galaxy-f41-fusion-blue-128gb-6gb-ram-.jpg'},
                {productcode:7,productname:'Mobile',color:'black',price:35000,category:'Electronics',description:"Samsung Galaxy A53",instockquantity:5,image:'https://images-eu.ssl-images-amazon.com/images/I/51S-5gFoUAL._SX300_SY300_QL70_FMwebp_.jpg'},

            ]
        }
    }

    // getSelectedData(name:string|null)
    // {
    //    return this.employeeList.filter(e=>e.FirstName == name);
       
    // }
}