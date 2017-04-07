/**
 * Created by Connors on 4/7/17.
 */
import { Component, OnInit } from '@angular/core';
import { ReviewService, Review } from '../shared';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit{
  title = 'Super Awesome';
  reviewItems: Review[];

  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.reviewItems = this.reviewService.reviewItems;
  }
}
