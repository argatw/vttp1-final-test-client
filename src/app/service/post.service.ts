import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, lastValueFrom } from "rxjs";
import { PostDetail, Registration } from "../models";



// const URL = 'http://localhost:8080/api/registration'
// const URL = 'https://day34-am-server.herokuapp.com/api/registration'

@Injectable()
export class PostService {
    constructor(private http: HttpClient) { }

    image: string = ''

    newRegistration(file: File | Blob, name: string, email: string, phone: string,
        title: string, description: string) {
        // const headers = new HttpHeaders()
        //     .set('Content-Type', 'application/json')
        //     .set('Accept', 'application/json')
        
        // const blob = this.dataURIToBlob(this.image)
        // console.info('>>> blob: ', blob)
        // let file = new File([blob], "postImage.jpg", { type: "image/jpg"})

        const formData = new FormData()
        formData.set('name', name)
        formData.set('email', email)
        formData.set('phone', phone)
        formData.set('title', title)
        formData.set('description', description)
        formData.set('file', file)
        // formData.set('myfile', blob, 'pic.png')
        // formData.append('file', file)

        // this.http.post<Response>(URL, registration, { headers })
        return firstValueFrom(
            this.http.post<any>('/api/posting', formData)
            // .pipe() 
        )

    }

    postConfirmation(postDetail: PostDetail) {
        const postingId = postDetail.posting_id
        return firstValueFrom(this.http.put<any>(`/api/posting/${postingId}`,postDetail) )
    }

    dataURIToBlob(dataURI: string) {
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        var byteString = atob(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

        // write the bytes of the string to an ArrayBuffer
        var ab = new ArrayBuffer(byteString.length);

        // create a view into the buffer
        var ia = new Uint8Array(ab);

        // set the bytes of the buffer to the correct values
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        // write the ArrayBuffer to a blob, and you're done
        var blob = new Blob([ab], { type: mimeString });
        return blob;
    }

    
}

    

    
    
