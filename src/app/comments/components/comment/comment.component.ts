import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentInterface } from '../../types/comment.interface';
import { ActiveCommentTypeEnum } from '../../types/activeCommentType.enum';
import { ActiveCommentInterface } from '../../types/activeComment.interface';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment!: CommentInterface;
  @Input() currentUserId!: string;
  @Input() replies!: CommentInterface[];
  @Input() activeComment!: ActiveCommentInterface | null;
  @Input() parentId: string | null = null;

  @Output() setActiveComment = new EventEmitter<ActiveCommentInterface | null>();
  @Output() addComment = new EventEmitter<{ text: string, parentId: string | null }>();
  @Output() updateComment = new EventEmitter<{ text: string, commentId: string }>();
  @Output() deleteComment = new EventEmitter<string>();

  canReply: boolean = false;
  canEdit: boolean = false;
  canDelete: boolean = false;
  activeCommentType = ActiveCommentTypeEnum
  replyId: string | null = null;

  constructor() { }

  ngOnInit(): void {
    this.canReply = Boolean(this.currentUserId);
    this.canEdit = this.currentUserId === this.comment.userId;
    this.canDelete = this.currentUserId === this.comment.userId;
    this.replyId = this.parentId ? this.parentId : this.comment.id;
  }

  isReplying(): boolean {
    if (!this.activeComment) {
      return false;
    }

    return this.activeComment.id === this.activeComment.id
      && this.activeComment.type == this.activeCommentType.replying;
  }

  isEditing(): boolean {
    if (!this.activeComment) {
      return false;
    }

    return this.activeComment.id === this.activeComment.id
      && this.activeComment.type == this.activeCommentType.editing;
  }
}
