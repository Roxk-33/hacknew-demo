import React from 'react';
import styled from 'styled-components';

const ArticleDetailStyle = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
  color: #828282;
`;
const ArticleDetailTitleStyle = styled.a`
`;

export default function ArticleDetail({ title, link }) {
    return <ArticleDetailStyle>
        <ArticleDetailTitleStyle href={link}>
            {title}
        </ArticleDetailTitleStyle>
    </ArticleDetailStyle>
}