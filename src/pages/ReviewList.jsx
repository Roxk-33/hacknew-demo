import React from 'react';
import useSWR from 'swr';
import urlParse from 'query-string';
import styled from 'styled-components';
import ArticleDetail from '../components/ArticleDetail';
import UserReviewList from '../components/UserReviewList';
import UserReviewInput from '../components/UserReviewInput';
const fetcher = url => fetch(url).then(r => r.json())

const Container = styled.div`
    padding: 5px 20px;
    max-width:90%;
    margin: 20px auto;
    color: #828282;
    font-size: 10pt;
    text-align: left;
    background-color: rgb(246, 246, 239);
`;

function ReviewList() {
    const { id } = urlParse.parse(window.location.search);
    const { data, error } = useSWR(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, fetcher);
    console.log(data);
    if (!id) return <div>
        无 ID 参数
    </div>
    if (!data) return <div>loading...</div>
    return (
        <Container className="ReviewList">
            <ArticleDetail title={data.title} link={data.url} />
            <UserReviewInput />
            <UserReviewList />
        </Container>
    );
}

export default ReviewList;
