// css

import styled from 'styled-components';

const Market = styled.div`
    margin: 0;
    padding: 0;
    position: relative;
    top: -100%;
    z-index: 5;

    .wrap {
        position: fixed;
        width: 100%;
        height: 100%;
        text-align: center;
        margin: 0 auto;
        border: 1px solid black;
    }

    .item {
        width: 100%;
        height: 60%;
    }

    .content1 {
        overflow: auto;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 30%;
    }

    .content_clickGold {
        background: black;
    }

    .content_ignoreGold {
        background: black;
    }

    .content_ignoreExp {
        background: black;
    }

    .content_name {
        border-bottom: 1px solid;
        padding: 2.5px 0;
    }

    .content_up {
        background: beige;
        display: flex;
        justify-content: space-around;
        border: 1px solid black;
    }

    .content_down {
        display: flex;
        justify-content: space-around;
        & > div > img {
            width: 2rem;
            object-fit: cover;
        }
    }

    .upbt {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .upbt {
        border: 2px solid indigo;
        background-color: rgba(0, 0, 0, 0);
        color: indigo;
        padding: 5px;
    }
    .upbt:hover {
        color: white;
        background-color: violet;
    }
    .footer {
        width: 100%;
        height: 10%;
        display: flex;
        text-align: center;

        & > div {
            width: 33.33333%;
        }

        & > .stat {
            background: orange;   
        }  

        & > .gold {
            background: indigo;
        }
        
        & > .exp {
            background: purple;
        }
    }
    .alignCenter {
        padding: 1.1rem;
    }
    .fontNoWrap {
        white-space:nowrap;
    }
    .menuBackgroundYellow {
        background-color: yellow;
    }
`;

const Responsive = ({ children }: any) => {
    return <Market>{children}</Market>;
};

export default Responsive;
