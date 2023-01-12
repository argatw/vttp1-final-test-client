import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostDetail, Registration } from 'src/app/models';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-posting',
  templateUrl: './create-posting.component.html',
  styleUrls: ['./create-posting.component.css']
})
export class CreatePostingComponent implements OnInit {

  regForm!: FormGroup
  // eventId!: string

  @ViewChild('toUpload')
  toUpload!: ElementRef
  
  constructor(private fb: FormBuilder, private pSvc: PostService, private router: Router) { }

  ngOnInit(): void {
    this.regForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>('',[Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>('',[Validators.required, Validators.email]),
      phone: this.fb.control<string>('', [Validators.required]),
      title: this.fb.control<string>('', [Validators.required]),
      description: this.fb.control<string>('', [Validators.required]),
      image: this.fb.control<any>('',[Validators.required])
    })
  }

  processForm() {
    const post = this.regForm.value as PostDetail
    console.info("ProcessForm() register:: ",post)
    
    const name = this.regForm.get('name')?.value
    const email = this.regForm.get('email')?.value
    const phone = this.regForm.get('phone')?.value
    const title = this.regForm.get('title')?.value
    const description = this.regForm.get('description')?.value
    const file = this.toUpload.nativeElement.files[0]

    console.info("name, email, phone, title, descrip, file",name, email, phone, title, description, file)
   
    this.pSvc.newRegistration(file,name,email,phone,title,description)
      .then(result => {
        console.info("processform() final post: ", result)
        this.router.navigate(['/post'], {state: {details: result}})
      }).catch(err => {
        console.error(">> error: ", err)
      })
  }

  // processFormm() {
  //   const post = this.regForm.value as PostDetail

  //   console.info("ProcessForm() register:: ",post)
  //   this.pSvc.newRegistration(post)
  //     .then(result => {
  //       console.info("result:: ",result)
  //       // alert("Your registration code is:: "+result.message)
  //       this.router.navigate(['post']);
  //     })
  //     .catch(error => {
  //       console.error("error:: ",error)
  //     })
  // }

  // onSelect(event: any){
  //   const file = event.target.files[0]
  //   var reader = new FileReader()
  //   reader.readAsDataURL(file)
  //   reader.onload = () => {
  //     console.log(reader.result)
  //     //@ts-ignore
  //     this.imageData = reader.result
  //     //@ts-ignore
  //     this.reviewSvcs.image = reader.result
  //   }
  // }

}
