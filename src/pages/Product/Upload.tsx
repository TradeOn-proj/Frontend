import {
  container, title, line, label, input, row, column, keywordInputWrapper, keywordInputStyle,
  keywordList, keywordBox, searchbtn, deletebtn, imageBox, image, textarea, input2, fileBtn, buttonRow
} from "./Upload.style";
import { useState, useRef } from 'react';
import { Search, Delete } from "@assets/index";
import Buttons from "@components/Button/Buttons";
import { postProductFormData } from "apis/userAPI";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [titleInput, setTitleInput] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleKeywordAdd = () => {
    if (keywordInput.trim() && !keywords.includes(`#${keywordInput}`)) {
      setKeywords([...keywords, `#${keywordInput}`]);
      setKeywordInput('');
    }
  };

  const handleKeywordRemove = (keyword: string) => {
    setKeywords(keywords.filter(k => k !== keyword));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    if (!titleInput || !description || !keywords.length || !imageFile) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("title", titleInput);
    formData.append("description", description);
    formData.append("category", keywords[0].replace("#", ""));
    formData.append("thumbnail_image_url", imageFile);

    try {
      const res = await postProductFormData(formData);
      console.log("✅ 등록 성공:", res);
      alert("등록이 완료되었습니다.");
   
    } catch (err) {
      console.error("❌ 등록 실패:", err);
      alert("등록에 실패했습니다.");
    }
  };

  const handleCancel = () => {
    console.log("취소 버튼 클릭됨");
  };

  return (
    <div css={container}>
      <div css={title}>상품 등록</div>
      <div css={line} />
      <label css={label}>상품</label>
      <input
        css={input}
        placeholder="상품 이름을 입력하세요."
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />

      <div css={row}>
        <div css={column}>
          <label css={label}>키워드</label>
          <div css={keywordInputWrapper}>
            <input
              css={keywordInputStyle}
              placeholder="키워드를 추가하세요. 예) #의류 #바람막이"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleKeywordAdd()}
            />
            <button onClick={handleKeywordAdd}>
              <Search css={searchbtn} />
            </button>
          </div>

          <div css={keywordList}>
            {keywords.map((k, i) => (
              <div key={i} css={keywordBox}>
                {k}
                <button onClick={() => handleKeywordRemove(k)}>
                  <Delete css={deletebtn} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div css={column}>
          <label css={label}>상품 사진</label>
          <div css={imageBox}>
            {previewUrl ? (
              <img src={previewUrl} css={image} alt="미리보기" />
            ) : (
              <span>이미지를 선택하세요</span>
            )}
          </div>
          <button css={fileBtn} onClick={handleFileButtonClick}>파일 선택</button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
      </div>

      <label css={label}>상품 설명</label>
      <textarea
        css={textarea}
        placeholder="상품 설명을 입력하세요."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div css={buttonRow}>
        <Buttons text="등록하기" type="filled" onClick={handleSubmit} />
        <Buttons text="취소하기" type="outlined" onClick={handleCancel} />
      </div>
    </div>
  );
};

export default Upload;
