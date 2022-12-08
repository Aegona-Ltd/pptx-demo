import type { NextPage } from "next";
import Head from "next/head";
import pptxgen from "pptxgenjs";
import { useState } from "react";
import {  Input } from "antd";

const Home: NextPage = () => {
  let pptx = new pptxgen();
  let slideOne = pptx.addSlide();
  slideOne.addImage({ path: "images/pptx-img.png", x: 6, y: 0, w: 4, h: 5.62 });

  const [showInput, setShowInput] = useState({
    title: false,
    content: false,
  });

  const [slideOneState, setSlideOneState] = useState({
    title: "THIS IS A SLIDE TITLE",
    content: `Your audience will listen to you or read the content, but won’t do
    both. But remember not to overload your slides with content.`,
  });

  slideOne.addText(slideOneState.title, {
    x: 0.5,
    y: 1.24,
    w: 5.12,
    h: 0.94,
    margin: 0.5,
    fontSize: 30,
    color: "8C92B9",
    bold: true,
    isTextBox: true,
  });

  slideOne.addText(slideOneState.content, {
    x: 0.5,
    y: 2.14,
    w: 5.12,
    h: 1.94,
    margin: 0.5,
    fontSize: 24,
    color: "000",
    bold: false,
    isTextBox: true,
  });

  const handleDownload = () => {
    pptx.author = "MRX";
    pptx.company = "Aegona";
    pptx.title = "PptxGenJS Testing";
    pptx.writeFile({ fileName: "react-demo.pptx" });
  };

  const handleChangeInput = (value, type) => {
    setSlideOneState((pre) => {
      return {
        ...pre,
        [type]: value,
      };
    });
  };

  const handleToggleInput = (type) => {
    setShowInput((pre) => {
      return {
        ...pre,
        [type]: !showInput[type],
      };
    });
  };

  return (
    <div>
      <Head>
        <title>PPTX Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pptx">
        <div className="slide">
          <div className="content">
            <div className="title-wrapper">
              {showInput.title ? (
                <Input
                  autoFocus
                  onChange={(e) => handleChangeInput(e.target.value, "title")}
                  onBlur={() => handleToggleInput("title")}
                  placeholder={slideOneState.title}
                  size="large"
                />
              ) : (
                <p onClick={() => handleToggleInput("title")} className="title">
                  {slideOneState.title}
                </p>
              )}
            </div>

            <div className="content-wrapper">
              {showInput.content ? (
                <Input.TextArea
                  autoFocus
                  onChange={(e) => handleChangeInput(e.target.value, "content")}
                  onBlur={() => handleToggleInput("content")}
                  placeholder={slideOneState.content}
                  size="large"
                />
              ) : (
                <p onClick={() => handleToggleInput("content")} className="">
                  {slideOneState.content}
                </p>
              )}
            </div>
          </div>
          <div className="image">
            <img src="images/pptx-img.png" alt="" />
          </div>
        </div>
        <button onClick={handleDownload} className="btn-download">
          Download
        </button>
      </div>
    </div>
  );
};

export default Home;
