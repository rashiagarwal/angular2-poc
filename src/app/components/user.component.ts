import {Component} from '@angular/core';
import {PostsService} from '../services/posts.services';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent {
  name: string;
  email: string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.name = 'Rashi Agarwal';
    this.email = 'rashi.agarwal@mavenwave.com';
    this.address = {
      street: 'Sector 66',
      city: 'Chandigarh',
    };
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  }

  toggleHobbies() {
    this.showHobbies = true;
  }
}

interface Address {
  street: string;
  city: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
