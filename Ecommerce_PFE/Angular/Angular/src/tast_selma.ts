data: any 
 
  //produitedit: FormGroup;
  //produitRef :any;
  
 /*key: any;
  newProduit: any;
  data: any = {
  id: '',
  nom: '',
  categorie: '',
  description:'',
  prix: 0,
  stock_disponible :0,
  date_ajouter :new Date()*/


  /*constructor(private produitservice: ProduitService,private formBuilder: FormBuilder,
  public router:Router ,private act : ActivatedRoute ) {}*/


  /*this.produitedit= this.formBuilder.group({
    nom:[''],
    categorie:[''],
     description:[''],
     prix:[''],
     stock_disponible: [''],
     date_ajouter:[''],
 });
}

  ngOnInit(): void {
const id = this.act.snapshot.paramMap.get('id');
 this.produitservice.getProduit(id).subscribe(res =>{
this.produitRef= res;

  this.produitedit = this.formBuilder.group({
    nom:[this.produitRef.nom],
    categorie:[this.produitRef.categorie],
    description:[this.produitRef.description],
    prix:[this.produitRef.prix],
    stock_disponible:[this.produitRef.stock_disponible],
    date_ajouter:[this.produitRef.date_ajouter],
   } ) })

 }
 onSubmit(){
  const id= this.act.snapshot.paramMap.get('id');
  this.produitservice.updatePoduit(this.produitedit.value ,id);
  this.router.navigate(['getproduits']);
 }


 movieClicked = (movie) => {
  this.api.getOneMovie(movie.id).subscribe(
    data => {
      this.selectedMovie = data;
    },
    error => {
      console.log(error);
    }
  );
}
updateMovie = () => {
  this.api.updateMovie(this.selectedMovie).subscribe(
    data => {
      this.getMovies();
    },
    error => {
      console.log(error);
    }
  );
}
*/
/*ngOnInit(): void {
//let id = this.act.snapshot.paramMap.get('id');
 let id = this.act.snapshot.params['id'];
  this.produitservice.getUser(id).subscribe(data => {
    this.user = data
    console.log(this.user)
  })
}*/
  ///
  //movies = [{title: 'test'}];
  //selectedProduit;
  //produit?: any;
  produit: Produit[];
 // produits?: any;
constructor(public router:Router ,private act: ActivatedRoute, private produitservice: ProduitService) {
  // this.selectedProduit = {id: '', nom: '' , categorie: '', prix: 0 };
 }


ngOnInit(): void {
  let id = this.act.snapshot.params['id'];
  this.produitservice.getUser(id).subscribe(data => {
  this.produit = data
    console.log(this.produit)
  });
}
getItems(): void {
  this.itemService.getItems()
    .subscribe(data => this.data = produit);
}

form = new FormGroup({
  nom: new FormControl('', [Validators.required]),
  categorie: new FormControl('', [Validators.required]),
});


submit() {
  this.data = this.form.value;
  this.produit.nom = this.data.nom;
  this.produit.categorie = this.data.categorie;
  console.log(this.data);
  
  this.produitservice.updateUser(this.produit.id, this.produit).subscribe(data => {
    console.log(data);
  });

  this.router.navigate(['/']);
}





produit: Produit = {
  id: '',
  nom: '',
  categorie: '',
  description: '',
  prix: 0,
  stock_disponible: '',
  date_ajouter: new Date
};

constructor(private route: ActivatedRoute, private itemService: ProduitService) { }

ngOnInit(): void {
  this.getItem();
}

getItem(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.itemService.getProduit(id).subscribe(data => {
    this.produit = {
      id: data.id,
      nom: data.nom,
      categorie: data.categorie,
      description: data.description,
      prix: parseFloat(data.prix), // Convert to number if necessary
      stock_disponible: data.stock_disponible ? data.stock_disponible.toString() : '', // Convert to string if necessary
      date_ajouter: data.date_ajouter,
    };
    console.log(this.produit);
  });
}
updateItem(): void {
  this.itemService.updatePoduit(this.produit.id, this.produit).subscribe(data => {
    console.log(data);
  });
}


}