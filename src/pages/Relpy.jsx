import React from 'react';
import styled from 'styled-components';
import ArticleDetail from '../components/ArticleDetail';
import UserReviewInput from '../components/UserReviewInput';
const Container = styled.div`
    padding: 5px 20px;
    max-width:90%;
    margin: 20px auto;
    color: #828282;
    font-size: 10pt;
    text-align: left;
    background-color: rgb(246, 246, 239);
`;

export default function Relpy() {
    const data = {
        title: `
        This is a lesson in being innovative. Pushing boundaries has costs. You can explore new ideas, rid yourself of legacy assumptions and arrive at some valuable things. But, you forgo the (often hidden) benefits of past mistakes and standard techniques that have all the kinks ironed out.`,
    }
    return (
        <Container className="ReviewList">
            <ArticleDetail title={data.title} />
            <UserReviewInput isListPage={false}/>
        </Container>
    );
}