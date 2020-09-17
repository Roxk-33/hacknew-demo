import React, { useState } from 'react';
import styled from 'styled-components';

const UserReviewInputStyle = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
  color: #828282;
`;
const UserReviewInputTextareaStyle = styled.textarea`
    font-family: monospace;
`;
const UserReviewInputSumbitBtnStyle = styled.button`
    margin-top: 20px;
    display: block;
`;

// isListPage 是否是评论列表页内调用输入框
export default function UserReviewInput({ isListPage = true }) {

    const [reviewContent, setReviewContent] = useState('');

    function handleReview(e) {
        setReviewContent(e.target.value);
    }

    function handleSumbitReview() {
        alert(`提交review:${reviewContent}`);
    }

    return <UserReviewInputStyle>
        <UserReviewInputTextareaStyle value={reviewContent} rows="6" cols="60" onChange={handleReview} />
        <UserReviewInputSumbitBtnStyle onClick={handleSumbitReview}>{isListPage ? 'add comment' : 'reply'}</UserReviewInputSumbitBtnStyle>
    </UserReviewInputStyle>
}