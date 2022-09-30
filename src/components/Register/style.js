import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;

    .label-text {
        margin-bottom: 0;
        font-size: 14px;
        line-height: 24px;
    }

    .sign-up {
        color: var(--primary-color);
        font-weight: 600;
        cursor: pointer;
    }

    .error {
        margin-top: 10px;
        font-size: 14px;
    }
`;