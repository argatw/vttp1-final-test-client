import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostDetail } from 'src/app/models';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private router: Router) { }



  postDetails!: PostDetail

  // postDetails: PostDetail[] = []

  ngOnInit(): void {
    this.postDetails = window.history.state.details as PostDetail
    console.info(">>post details: ",this.postDetails)
    console.info(">>post image url:", this.postDetails.image)
  }

  return() {
    this.router.navigate(['/'])
  }

  confirm() {
    // this.router.navigate(['/'])
    alert("Thank you for using our service, Your posting id is "+this.postDetails.posting_id)
  }

}
