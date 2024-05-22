import styled from "styled-components";

export const Container = styled.div`
  padding: 0px;
  height: 100%;
  font-family: "Nunito Sans", sans-serif;
  color: #8f8f8f;
  // background: #24242c;
  align-items: center;


  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  
    background: #24242c;
  }
  .mb-2 {
    margin-bottom: 0.5rem !important;
  }

  h1 {
    font-size: 1.75rem;
    padding-bottom: 10px;
    display: inline-block;
    color: #8f8f8f;
  }

  .text-zero {
    float: right;
    position: relative;
    /* font-size: 0; */

    .dropdown-menu-show {
      display: none;
    }

    .dropdown-menu {
      position: absolute;
      /* will-change: transform; */
      top: 0px;
      left: 0px;
      transform: translate3d(0px, 43px, 0px);
      border-radius: 0.75rem;
      font-size: 0.8rem;
      background: #232223;
      border: 1px solid rgba(143, 143, 143, 0.15);
      min-width: 9.5rem;
      padding: 0.5rem 0;
      margin: 0.125rem 0 0;
      text-align: left;
      list-style: none;
      display: block;

      .dropdown-item {
        padding: 0.5rem 1.25rem;
        color: #8f8f8f;
        width: 100%;
        white-space: nowrap;

        &:hover {
          background: #18191b;
          cursor: pointer;
        }
      }
    }
  }

  button {
    cursor: pointer;
    line-height: 1.5;
    font-weight: bold;
    letter-spacing: 0.05rem;
    padding: 0.7rem 2.1rem 0.6rem 2.1rem;
    color: #236591;
    border-color: #236591;
    font-size: 0.8rem;
    border-radius: 50px;
    border: 1px solid #236591;

    &:hover {
      background: #236591;
      color: #18191b;
    }
  }

  button1 {
    cursor: pointer;
    line-height: 1.5;
    font-weight: bold;
    letter-spacing: 0.05rem;
    padding: 0.7rem 2.1rem 0.6rem 2.1rem;
    color: white;
    border-color: #8f8f8f;
    font-size: 0.8rem;
    border-radius: 50px;
    border: 1px solid #8f8f8f;

    &:hover {
      background: #236591;
      color: #18191b;
    }
  }

  .breadcrumb {
    display: inline-block;
    color: #8f8f8f;
    ol {
      background-color: transparent;
      margin-bottom: 0.5rem;
      display: flex;
      flex-wrap: wrap;
      padding: 0.75rem 1rem;
      li {
        padding-left: 0.5rem;
      }

      .li-2 {
        &::before {
          content: "|";
          display: inline-block;
          padding-right: 0.5rem;
          color: #6c757d;
        }
      }
    }
  }

  .separator-tabs {
    border-bottom: 1px solid #424242;
    margin-bottom: 2rem !important;
    display: flex;
    flex-wrap: wrap;
  }

  .separator-tabs-item {
    margin-bottom: -1px;
    p {
      border: initial;
      position: relative;
      color: #236591;
      background: initial;
      padding-left: 0;
      padding-top: 0.5rem;
      padding-bottom: 2px;
      padding-right: 0;
      margin-right: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.5px;

      &::after {
        content: " ";
        background: #236591;
        border-radius: 10px;
        position: absolute;
        width: 100%;
        height: 2px;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        top: unset;
      }
    }
  }
`;




export const TabContentHome = styled.div`
  h2 {
    font-weight: 400;
    font-size: 1.3rem;
    color: #1b98d0;
    height: 2.5rem;
    padding: 10px 0px;
  }

  .info-card-row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 24px;
  }

  .info-card-col-md4 {
    flex: 0 0 auto;
    width: 32%;

    .info-card-col-content {
      /* height: 200px; */
      background: red;
      box-shadow: 0 4px 10px rgb(0 0 0 / 3%);
      /* background: var(--foreground); */
      border-radius: 16px;
      overflow: hidden;
      backface-visibility: hidden;
      transform: scale(1);
      position: relative;
      display: flex;
      flex-direction: column;
      cursor: pointer;

      &:hover {
        .info-card-col-content-img {
          transform: scale(1.2);
        }
      }

      .info-card-col-content-img {
        width: 100%;
        object-fit: cover;
        cursor: pointer;
        transition: transform 400ms;
      }

      .info-card-col-content-c {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .info-card-col-content-text {
          font-size: 1.25rem;
          line-height: 1.4;
          font-weight: 400;
          color: #191c1f;
        }

        .info-card-col-content-btn {
          /* height: 2.25rem; */
          padding: 8px 20px;
          font-size: 1em;
          margin-top: 0.2rem;
          cursor: pointer;
          width: 40%;
          border-radius: 8px;
          background-color: #1b98d0;
          color: #fff;
          border: none;
        }
      }
    }
  }

  .tab-row {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    background: #24242c;
    gap: 20px;
    align-items: center;
  }

  .tab-row-left {
    flex: 0 0 auto;
    width: 35%;
    .tab-row-left-card2 {
      background-color: #1d1d1d;
      height: 20.25rem;
      border-radius: 16px;
      margin-bottom: 20px;
    }
    .tab-row-left-card {
      background-color: #1d1d1d;
      height: 27rem;
      border-radius: 16px;
      margin-bottom: 20px;
      position: relative;

  

      .tab-row-card-content-left {
        padding: 2rem;
        background: #24242c;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      

        .left-c {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          height: 100%;
          flex-direction: column;

          .left-c-text {
            font-size: 1.5rem;
            line-height: 1.4;
            font-weight: 400;
            color: #1b98d0;
            margin-bottom: 0.25rem;
          }

          .left-c-text2 {
       
            line-height: 1.25;
            font-weight: 400;
          }
        }
      }
    }

    .card-img {
      width: 100%;
      border-radius: 16px;
      object-fit: cover;
    }
  }

  .tab-row-right {
    .card-img {
      width: 100%;
      border-radius: 16px;
      object-fit: cover;
    }
    flex: 0 0 auto;
    width: 63%;
    .tab-row-right-card {
      height: 300px;
      border-radius: 16px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;
    &::after{
      border-radius: 16px;
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      height: 100%;
      width: 100%;
      background: #000;
      opacity: 0.6;
    }

      .rr-c {
        padding: 0px 40px;
        position: absolute;
      }

      p {
        position: relative;
        z-index: 2000;
        color: #fff;
        font-size: 38px;
        font-weight: 600;
        z-index: 100;
      }
    }

    h2 {
      font-weight: 400;
      font-size: 1.3rem;
      color: #1b98d0;
      height: 2rem;
    }

    .tab-row-right-social {
      margin-top: 20px;
      margin-bottom: 20px;
      height: 406px;
      overflow-y: scroll;

      .tab-row-right-social-card {
        background-color: #1d1d1d;
        margin-bottom: 0.7rem;
        border-radius: 16px;
        margin-right: 10px;

        .social-card-img {
          height: 100%;
          flex: 0 0 auto;
          width: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .social-card-img-i {
            width: 6rem;
            height: 100%;
            object-fit: cover;
            border-radius: 16px 0px 0px 16px;
          }
        }

        .social-card-content-1 {
          flex: 0.9;
          padding: 0px 15px;
        }

        .social-card-content-2 {
          display: flex;
          align-items: center;
          margin: 0px 15px;
          p {
            margin: 0px 20px;
          }
        }
      }
    }
  }
`;



export const TabContentForm = styled.div`
  .tab-row {
     background: #24242c;
    .card {
      border: initial;
      background: #24242c;
      border-radius: 0.1rem;
      align-items: center;
      justify-content: center;
      box-shadow: 0 1px 15px rgb(0 0 0 / 10%), 0 1px 8px rgb(0 0 0 / 10%);
      border-radius: 0.75rem;
      margin-bottom: 1.5rem;
      position: relative;
      display: flex;
      min-width: 0;
    }
    .card-body {
      padding: 1.8rem;
      flex: 1 1 auto;
      background: rgb(30, 32, 34);
    
    

      .card-body-content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 50px;
        align-items: center;
        margin-left: 360px;
        justify-content: center;
      
      }

      .mt-5 {
        margin: 15px 10px;
        // margin-right: 10px;
        align-items: center;
        justify-content: center;
       
      }

      .card-btn {
        display: flex;
        align-items: center;
        background: transparent;
        justify-content: center;
        button {
          margin: 20px 10px;
          background: transparent;

        }
      }
    }
  }
`;

export const Label = styled.label`
  color: #8f8f8f;
  font-size: 15px;
`;

export const Field = styled.input`
  width: 100%;
  border: 1px solid rgba(101, 101, 101, 0.576);
  border-radius: 4px;
  padding: 0.8rem 1.25rem;
  background: #1e2022;
  outline: none;
  color: #8f8f8f;
  font-weight: 400;
  margin-top: 8px;
  /* ::placeholder {
      color: green;
      transition: color 0.3s;
    } */

  :focus {
    border: 1px solid #9277ff;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid rgba(101, 101, 101, 0.576);
  border-radius: 4px;
  padding: 0.8rem 1.25rem;
  background: #1c2424;
  outline: none;
  color: #8f8f8f;
  font-weight: 400;
  margin-top: 8px;

  :focus {
    border: 1px solid #9277ff;
  }
`;


export const ChooseFileBtn = styled.textarea`
width: 100%;
border: 1px solid rgba(101, 101, 101, 0.576);
border-radius: 4px;
padding: 0.8rem 1.25rem;
background: #1c2424;
outline: none;
color: #8f8f8f;
font-weight: 400;
margin-top: 8px;

:focus {
  border: 1px solid #9277ff;
}

  input {
    margin-top: 1rem;
    background: #1c2424;
}

input::file-selector-button {
  font-weight: bold;
    color: #1c2424;
    background: #1c2424;
    padding: 0.5em;
    border: thin solid grey;
    border-radius: 3px;
}
`;



export const SelectField = styled.select`
  width: 100%;
  border: 1px solid rgba(101, 101, 101, 0.576);
  border-radius: 4px;
  padding: 0.8rem 1.25rem;
  background: #1c2424;
  outline: none;
  color: #8f8f8f;
  font-weight: 400;
  margin-top: 8px;

  :focus {
    border: 1px solid #9277ff;
  }
`;


// ---------------------------[Employees]


export const TabContentEmployees = styled.div`
  .tab-row {
    display: flex;
    flex-wrap: wrap;
    gap: 22px;
    min-height: 100%;
  }

  .tab-col-12 {
    max-width: 32%;
    position: relative;
    width: 100%;
    min-height: 100%;
  }

  .tab-col-card {
    background: #18191b;
    border-radius: 0.1rem;
    box-shadow: 0 1px 15px rgb(0 0 0 / 10%), 0 1px 8px rgb(0 0 0 / 10%);
    border-radius: 0.75rem;
    position: relative;
    display: flex;
    min-width: 0;

    img {
      margin: 1.5rem;
      border-radius: 50px;
      padding: 0;
      height: 90px;
      object-fit: cover;
      align-self: center;
      border: 0.7px solid #dee2e6;
    }
  }

  .tab-col-card-content {
    display: flex;
    flex-grow: 1;
    min-width: 0;
  }

  .tab-col-card-content-c {
    padding: 1.75rem;
    padding-left: 0 !important;
    flex: 1 1 auto;

    h2 {
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }
    p {
      color: #696969;
      font-size: 0.76rem;
      line-height: 0.9rem;
      margin-bottom: 0.5rem;
    }
    .tab-btn {
      padding: 0.25rem 1.25rem;
      font-size: 0.76rem;
      line-height: 1.3;
      color: #236591;
      border-radius: 50px;
      border: 1px solid #236591;

      &:hover {
        background: #236591;
        color: #18191b;
      }
    }
  }
`;



