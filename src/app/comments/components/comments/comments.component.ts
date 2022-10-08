import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { ActiveCommentInterface } from '../../types/activeComment.interface';
import { CommentInterface } from '../../types/comment.interface';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() currentUserId!: string;

  comments: CommentInterface[] = [];
  activeComment: ActiveCommentInterface | null = null;

  constructor(private commentService: CommentsService) { }

  ngOnInit(): void {
    this.comments = this.commentService.getComments();
  }

  addComment({ text, parentId }: { text: string, parentId: null | string }): void {
    let comment = this.commentService.createComment(text, parentId);
    this.comments = [...this.comments, comment];
    this.activeComment = null;
  }

  updateComment({ text, commentId }: { text: string, commentId: string }) {
    let updatedComment = this.commentService.updateComment(commentId, text);
    this.comments = this.comments.map(x => {
      if (x.id === commentId) {
        return updatedComment;
      }
      return x;
    })

    this.activeComment = null;
  }

  deleteComment(commentId: string): void {
    this.commentService.deleteComment(commentId);
    this.comments = this.comments.filter(x => x.id !== commentId);
  }

  getReplies(commentId: string): CommentInterface[] {
    return this.comments
      .filter(comment => comment.parentId === commentId)
      .sort((a, b) => new Date(a.createdAt).getMilliseconds() - new Date(b.createdAt).getMilliseconds());
  }

  setActiveComment(activeComment: ActiveCommentInterface | null): void {
    this.activeComment = activeComment;
  }
}