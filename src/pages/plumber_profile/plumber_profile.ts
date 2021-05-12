import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, App, ToastController, Tabs, Events, ViewController, PopoverController } from 'ionic-angular';
import { APIURL, IMAGE_URL } from '../../app/apiconfig';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import{ Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SigninPage } from '../signin/signin';

@Component({
	template: `
	<ion-card class="card-space">
		<ion-item>
		<ion-label stacked>Amount</ion-label> <!--I can use floating here but I prefer stacked-->
			<ion-input type="tel" autofocus="true" [(ngModel)]="qty" placeholder="Enter Quantity">
			</ion-input>
		</ion-item>
		<button style="width:100%;" class="add-qty-btn" (click)="addToCart()" ion-button>Add to trolley</button>
	</ion-card>
	`
  })
export class CartQuantity {
	constructor(public viewCtrl: ViewController, public toastController: ToastController, public navParams:NavParams) {
		this.qty = this.navParams.get('qty');
		this.stock = this.navParams.get('stock');
	}
	qty: number = 0;
	stock: number = 0;
	close() {
	  this.viewCtrl.dismiss(this.qty);
	}
	addToCart() {
		// if (this.qty > 0 && !isNaN(this.qty)) {
		// 	this.close();
		// } else if (Number(this.qty) > Number(this.stock)) {
			
		// } else {
		// 	const toast = this.toastController.create({
		// 		message: 'Please enter valid quantity',
		// 		duration: 2000,
		// 		cssClass: 'toast-danger',
		// 		position: 'bottom'
		// 	  });
		// 	  toast.present();
		// }
		if (this.qty == 0 || isNaN(this.qty)) {
			const toast = this.toastController.create({
			message: 'Please enter valid quantity',
			duration: 2000,
			cssClass: 'toast-danger',
			position: 'bottom'
			});
			toast.present();
			return false;
		}
		if (Number(this.qty) > Number(this.stock)) {
			const toast = this.toastController.create({
				message: 'total stock is only '+this.stock,
				duration: 2000,
				cssClass: 'toast-danger',
				position: 'bottom'
				});
				toast.present();
				return false;
		}
		this.close();
	}
  }
  

@Component({
  selector: 'page-plumber_profile',
  templateUrl: 'plumber_profile.html'
})
export class Plumber_profilePage {
 	about_tab: string = "product";
 	details: any = {}
 	apiurl: string = APIURL;
 	ratings: any = {}
 	user: any = {}
 	showLoader: boolean = false;
 	submitAttempt: boolean = false;	
 	orderForm: FormGroup;
 	uploadedFiles: any = [];
	product_list:any = [];
	cart_count:number = 0;
	showDesc: boolean = false;
	productDesc: string  = '';
	cart_list = [];
	subcat_id:any;
	cat_id:any;
	disable_cart_btn: boolean = false;
	LOGIN: boolean=false;
	constructor(public navCtrl: NavController,public popoverCtrl: PopoverController, private app: App, public toastController: ToastController, public formBuilder: FormBuilder, private camera: Camera, public actionsheet: ActionSheetController, private http: HttpClient, public storage: Storage, private navparams: NavParams, public events: Events) {

	}

	ngOnInit() {
		
		this.buildForm();
	}

	async ionViewDidLoad(){
		this.subcat_id = this.navparams.get('subcat_id');
		this.cat_id = this.navparams.get('cat_id');
		this.details = (this.navparams.get('obj'))?JSON.parse(this.navparams.get('obj')):{};
		let sp_id = this.navparams.get('sp_id');
		console.log('this.details',this.details);
		console.log('sp_id',sp_id);
		this.showLoader = true;
		if(sp_id){
			await this.getProviderDetails(sp_id).catch(err=>{console.error('err',err);});
		}

		await this.storage.get('cart_list').then((data) => {
			if (data) {
				this.cart_list = data;
				console.log('cart list ', this.cart_list);
				if (this.cart_list.length > 0) {
					console.log('details are ', this.cart_list[0], this.details.id, this.subcat_id);
					if (this.cart_list[0]['sp_id'] == this.details.id && this.cart_list[0]['subcat_id'] == this.subcat_id) {
						this.disable_cart_btn = false;
					} else {
						this.disable_cart_btn = true;
					}
				} else {
					this.disable_cart_btn = false;
				}
			}
			console.log('disable cart is ', this.disable_cart_btn);
		})
		this.storage.get('cuserinfo').then(result => {
			if(result){
				this.user = JSON.parse(result);
				this.details.is_product = 1;
				
				if (this.details.is_product == 1) {
					this.about_tab = "product";
					this.getProductList();
				}
				
				this.http.get(APIURL+'reviews/ratings?id='+this.details.id+'&access-token='+this.user.token)
				.subscribe({
					next: response => {
						this.showLoader = false;
						this.ratings = response;
					},
					error: err => {
						this.showLoader = false;
						console.error(err);
					}
				});
				this.LOGIN=true;
			}else{
				this.LOGIN=false;
			}
			
		});
	}

	getProviderDetails(sp_id){
		return new Promise((res,rej)=>{
			let lat = 19.176667;
			let long = 73.04222;
			this.http.get(APIURL+'customers/providers?subcat_id='+this.subcat_id+'&lat='+lat+'&lng='+long)
			.subscribe({
				next: (response:any) => {
					this.showLoader = false;
					let details = response.find(e=>e.id==sp_id);
					this.details = details;
					console.log('this.details',this.details);
					res(true);
				},
				error: err => {
					console.error(err);
					rej(err);
				}
			});
		});
	}

	getProductList() {
		// let url ="https://everythingservices.in/admin14/capi/v1/customers/product-list?sp_id=777&access-token=wVHYUA5wHPgAgrRBg9z6Ut_2C_8PX9cX";
		// let url = APIURL+'customers/product-list?sp_id='+this.details.id
		let url = `${APIURL}customers/product-list?sp_id=${this.details.id}&category_id=${this.cat_id}&subcat_id=${this.subcat_id}&access-token=${this.user.token}`;
		this.http.get(url)
			.subscribe({
		        next: (response:any) => {
		        	this.showLoader = false;
					response.forEach(element => {
						element['added_in_cart'] = false;
						element['cart_details'] = {};
						element['image_url'] = IMAGE_URL + element.image;
						let index = this.cart_list.findIndex((item) => {
							return item.product_name == element.name;
						});
						if (index != -1) {
							element['added_in_cart'] = true;
							element['cart_details'] = this.cart_list[index];
						}
					});
					
		        	this.product_list = response;
		        },
		        error: err => {
		        	this.showLoader = false;
		          	console.error(err);
		        }
		});
	}

	openDesc(prod) {
		this.productDesc = prod.description;
		this.showDesc = true;
	}

	closeDesc() {
		this.productDesc = '';
		this.showDesc = false;
	}

	addCart(item) {
		console.log('item',item);
		this.storage.get('cuserinfo').then(result => {
			this.user = JSON.parse(result);
			if(result){
				let popover = this.popoverCtrl.create(CartQuantity, {stock: item.stock, edit: false});
				popover.present({
					ev: 0
				});
				popover.onDidDismiss((data) => {
					if (!data) {
						return false;
					}
					console.log('itemy',item);
					let url = APIURL + "customers/cartcreate?access-token="+ this.user.token;
					let cart_obj = {
						customer_id: this.user.id,
						product_id: item.product_id,
						unit: item.unit,
						qty:data,
						mrp: item.mrp,
						sp_id: this.details.id,
						subcat_id: this.navparams.get('subcat_id'),
						sale_price: item.sale_price
					};
					this.showLoader = true;
					this.http.post(url, cart_obj)
					.subscribe({
						next: (response:any) => {
							this.showLoader = false;
							if (response.error != 1) {
								item['added_in_cart'] = true;
								item['cart_details'] = response;
								const toast = this.toastController.create({
									message: 'Product added in trolly.',
									duration: 2000,
									cssClass: 'success',
									position: 'bottom'
								});
								toast.present();
								this.getCartCount();
								this.getCartList();
							} else {
								const toast = this.toastController.create({
									message: response.reason,
									duration: 2000,
									cssClass: 'toast-danger',
									position: 'bottom'
								});
								toast.present();
							}
							
						},
						error: err => {
							this.showLoader = false;
							const toast = this.toastController.create({
								message: 'Something went wrong.',
								duration: 2000,
								cssClass: 'toast-danger',
								position: 'bottom'
							});
							toast.present();
						}
				});
				})
			}else{
				// make login
				let subcat_id = this.navparams.get('subcat_id');
				let details = this.navparams.get('obj');
				console.log('this.navCtrl',this.navCtrl);
				this.navCtrl.push(SigninPage,{subcat_id:subcat_id,obj:details});
			}
		  });
	}

	editQty(item) {
		let popover = this.popoverCtrl.create(CartQuantity, {qty: item.cart_details.qty, stock: item.stock, edit: true});
		popover.present({
			ev: item.cart_details.qty
		});
		popover.onDidDismiss((data) => {
			// console.log('data is ', data);
			if (data) {
				let url = APIURL +"customers/cartupdate?access-token="+this.user.token+"&customer_id="+this.user.id;
				let cart_obj ={
					cart_id: item.cart_details.id,
					product_id: item.cart_details.product_id,
					unit: item.cart_details.unit,
					qty: item.cart_details.qty,
					mrp: item.cart_details.mrp,
					sale_price: item.cart_details.sale_price
				};
				this.showLoader = true;
				this.http.post(url, cart_obj)
				.subscribe({
					next: (response:any) => {
						this.showLoader = false;
						if (response.error != 1) {
							item.cart_details.qty = data;
							const toast = this.toastController.create({
								message: 'Quantity updated in trolly.',
								duration: 2000,
								cssClass: 'success',
								position: 'bottom'
							});
							toast.present();
							this.getCartCount();
							this.getCartList();
						} else {
							const toast = this.toastController.create({
								message: response.reason,
								duration: 2000,
								cssClass: 'toast-danger',
								position: 'bottom'
							});
							toast.present();
						}
						
					},
					error: err => {
						this.showLoader = false;
						const toast = this.toastController.create({
							message: 'Something went wrong.',
							duration: 2000,
							cssClass: 'toast-danger',
							position: 'bottom'
						});
						toast.present();
					}
			});
			}
		})
	}

	removeFromCart(item) {
		let url = APIURL + "customers/del-cart?access-token="+ this.user.token+"&cart_id="+item['cart_details']['id'];
		this.showLoader = true;
		this.http.get(url)
			.subscribe({
		        next: response => {
		        	this.showLoader = false;
					item['added_in_cart'] = false;
					item['cart_details'] = {};
		        	this.getCartCount();
					this.getCartList();
		        },
		        error: err => {
		        	this.showLoader = false;
		          	console.error(err);
		        }
		});
	}

	getCartCount() {
		let url = APIURL +"customers/cart-count?customer_id="+this.user.id+"&access-token="+ this.user.token;
		this.showLoader = true;
		
		this.http.get(url)
			.subscribe({
		        next: response => {
		        	this.showLoader = false;
		        	this.events.publish('add_to_cart', response['cart_count']);
		        },
		        error: err => {
		        	this.showLoader = false;
		          	console.error(err);
		        }
		});
	}

	getCartList() {
		let url =APIURL +"customers/cart-list?customer_id="+this.user.id+"&access-token="+ this.user.token;
		
		this.http.get(url)
			.subscribe({
		        next: (response:any) => {
					response.forEach(element => {
						element['id'] = element['cart_id']
					});
		        	this.storage.set('cart_list', response);
		        },
		        error: err => {
		        	this.showLoader = false;
		          	console.error(err);
		        }
		});
	}

	buildForm(){
		this.orderForm = this.formBuilder.group({
			requirement: ['', Validators.required]
		});
	}

	dataURLtoFile(b64Data, contentType) {
        contentType = contentType || '';
        let sliceSize = 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

		var blob = new Blob(byteArrays, {type: contentType});
		let filename = Math.random().toString(36).replace(/[^a-z]+/g, '')+".jpg";
		var file = new File([blob], filename, {type: contentType});
		return file;
	}

	openImageSelector(){
		let actionSheet = this.actionsheet.create({
	     title: 'Select Images Eg; Doctor Prescription',
	     buttons: [
	       {
	         text: 'Browse Photo Albums',
	         role: 'destructive',
	         handler: () => {
	           this.uploadedFiles = [];
	           document.getElementById('requirement_images').querySelector('input').click();
	         }
	       },
	       {
	         text: 'Open Camera',
	         role: 'destructive',
	         handler: () => {
	         	//this.uploadedFiles = [];
	            const options: CameraOptions = {
				  quality: 100,
				  destinationType: this.camera.DestinationType.DATA_URL,
				  encodingType: this.camera.EncodingType.JPEG,
				  mediaType: this.camera.MediaType.PICTURE,
				  correctOrientation: true,
				  cameraDirection: 1
				}

				this.camera.getPicture(options).then((imageData) => {
					let base64Image = 'data:image/jpg;base64,'+imageData;
					var imgtag = document.createElement("img");
					imgtag.src = base64Image;
					document.querySelector('.uploaded_images').appendChild(imgtag);
					this.uploadedFiles.push(base64Image);
				})
	         }
	       },
	       {
	         text: 'Cancel',
	         role: 'cancel',
	         handler: () => {}
	       }
	     ]
	   });
	   actionSheet.present();
	}

	renderImages() {
	  	var f = document.getElementById('requirement_images').querySelector('input').files;
	  	document.querySelector('.uploaded_images').innerHTML = '';
	  	function importFile(i, that){
			var reader = new FileReader();
			var imgtag = document.createElement("img");
			reader.onloadend = function(event) {
				imgtag.src = <any>reader.result;
				document.querySelector('.uploaded_images').appendChild(imgtag);
				if(i < f.length - 1){
					importFile(++i, that);
				}
			};
			that.uploadedFiles.push(f[i]);
			reader.readAsDataURL(f[i]);
		}
		var that = this;
		importFile(0, that);
	}
	reqTabClick(){
		this.storage.get('cuserinfo').then(result => {
			console.log('result result',result);
			if(!result){
				let subcat_id = this.navparams.get('subcat_id');
				let details = this.navparams.get('obj');
				console.log('this.navCtrl',this.navCtrl);
				this.navCtrl.push(SigninPage,{subcat_id:subcat_id,obj:details});
			}else{
				// make login
				console.log('Already logged in',);
			}
		});	
	}

 	request_quote(){
		this.storage.get('cuserinfo').then(result => {
			console.log('result result',result);
			if(result){
				this.submitAttempt = true;
				if(!this.orderForm.valid){
					return false;
				}

				console.log(this.uploadedFiles)

				let formData = new FormData();
				for (var i = 0; i < this.uploadedFiles.length; i++) {
					console.log('length is',this.uploadedFiles[i].length)
					formData.append('file[]', this.uploadedFiles[i]);
				}
				formData.append('requirement', this.orderForm.value['requirement']);
				formData.append('subcat_id', this.navparams.get('subcat_id'));
				formData.append('customer_id', this.user.id);
				formData.append('sp_id', this.details.id);

				console.log('form data is ', formData);
				this.showLoader = true;
				this.http.post<any>(APIURL+'orders?access-token='+this.user.token, formData)
				.subscribe({
					next: response => {
						this.showLoader = false;
						if(response.error){
							const toast = this.toastController.create({
							message: response.reason,
							duration: 5000,
							cssClass: 'toast-danger',
							position: 'top'
							});
							toast.present();
							return false;
						} else {
							const toast = this.toastController.create({
							message: 'Order successfully created. You will be notified once you receive quotation from service provider.',
							duration: 5000,
							cssClass: 'toast-success',
							position: 'top'
							});
							toast.present();
							this.orderForm.controls.requirement.setValue('');
							document.querySelector('.uploaded_images').innerHTML = '';
							const tabsNav = this.app.getNavByIdOrName('myTabsNav') as Tabs;
							tabsNav.select(1);
							this.navCtrl.popToRoot();
						}
					},
					error: error => {
						this.showLoader = false;
						this.submitAttempt = false;
						console.error('There was an error!', error);
					}
				})
			}else{
				// make login
				let subcat_id = this.navparams.get('subcat_id');
				let details = this.navparams.get('obj');
				console.log('this.navCtrl',this.navCtrl);
				this.navCtrl.push(SigninPage,{subcat_id:subcat_id,obj:details});
			}
		});
  	}  
}
