import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
const UserReviewListStyle = styled.h1`
  margin-top: 30px;
`;

const UserReviewItemStyle = styled.div`
    margin-top: 20px;
    display: block;
    font-size: 9pt;
    .relpy-link {
        display: block;
    }
`;

const UserReviewItemShowBtnStyle = styled.span`
    cursor: pointer;
    margin-left: 5px;
    font-size: 10pt;
    &:hover {
        text-decoration: underline;
    }
`;

const UserReviewItemChildStyle = styled.div`
    margin-left: 20px;
    display: ${props => props.isShow ? 'block' : 'none'}
`;

function changeChildReviewShow(state,idx){
    const newState = [...state];
    newState[idx] = !newState[idx];
    return newState;
}

// 同一层级的评论列表
function UserReviewListDetail({ reviewListData }) {
    const [isShowList, dispathIsShow] = useReducer(changeChildReviewShow, Array(reviewListData.length || 0).fill(true));

    return <>
        {
            reviewListData.map((reviewData, idx) => {
                const hasChildReview = reviewData.list && reviewData.list.length > 0;
                return <UserReviewItemStyle key={reviewData.text + idx}>
                <div>
                    {reviewData.text}
                    {hasChildReview ? <UserReviewItemShowBtnStyle onClick={()=>dispathIsShow(idx)}>{isShowList[idx] ? '[-]' : `${reviewData.list.length} more`}</UserReviewItemShowBtnStyle> : null}
                    <Link className="relpy-link" to='/relpy'>relpy</Link>
                </div>
                {hasChildReview ? <UserReviewItemChildStyle isShow={isShowList[idx]}><UserReviewListDetail reviewListData={reviewData.list} />  </UserReviewItemChildStyle> : null}
            </UserReviewItemStyle>
            })
        }
    </>
}


export default function UserReviewList() {
    const data = [
        {
            text: `The first clue that you're going to have water problems are the steps leading down to your front door. You built a catch basin to live in.
            Second clue is it is made from concrete. Concrete by itself is not water tight. It can be made water tight but some significant effort is required. Just ask anyone who has ever built a basement`,
            list: [
                {
                    text: `Wooden houses are a mistake. They burn. Unless... Unless you're good at making wooden houses that aren't likely to burn.
                    A failure isn't generally a proof that the main idea is wrong. Most failure are execution failures. I imagine that if they built this house again, they'de solve those problems`,
                    list: [
                        {
                            text: `One of the cons of underground living the article doesn't go into is radon exposure. Depending on where your house is located this can be a significant health risk`
                        },

                    ]
                },
                {
                    text: 'There is a whole city in Australia that has almost exclusively underground houses. Seach for "Coober Pedy" on youtube for one of the many documentaries about that city',
                },
            ]
        },
        {
            text: `Damn, this is a shame but at least they are honest with themselves and can look at this with an objective lens. Personally the idea of an underground house just screams problems to me, but I wonder if that's misplaced and there are people with well constructed underground homes that they've remained happy with long term.`
        },
        {
            text:`
            philprx 10 minutes ago [–]

            Point 10. Cancer
            “We replaced all damaged wood with treated timber and soaked it in creosote for good measure.”

            Please, don’t do that. It’s a high suspect for cancer. Already some paints and most of the wood agglomerate glues are bad for health, but this!

            Good luck still with your house, it’s vital to have a livable place for balance and creativity.`
        }
    ]

    return <UserReviewListStyle>
        <UserReviewListDetail reviewListData={data} />
    </UserReviewListStyle>
};