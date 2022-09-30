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

    .forget-password {
        font-size: 14px;
        color: var(--primary-color);
        cursor: pointer;
    }

    .sign-up {
        color: var(--primary-color);
        font-weight: 600;
        cursor: pointer;
    }

    .error {
        font-size: 14px;
    }
`;