import React, { useState } from "react";
import Forms from "./Form";
import Form from "react-bootstrap/Form";

export default function FormProduct() {
  const { Group, Label, Control, File } = Form;
  const [file, setFile] = useState({ value: null, class: "" });
  const [form, setForm] = useState({ price: 0, categorie: "Categories" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  function previewFile() {
    const preview = document.querySelector("img");
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        preview.src = reader.result;
        setFile({ value: reader.result, class: "form__img" });
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  return (
    <Forms
      className="form"
      render={(register, errors, getValues, setValue) => (
        <>
          <h2 className="form__title">New Product</h2>
          <Group controlId="title" className="form__item">
            <Label className="form__label">Name</Label>
            <Control
              ref={register}
              type="text"
              placeholder="Enter a title"
              size="sm"
              name="title"
              autoComplete="on"
            />
            {errors.title && (
              <strong className="form__warning">
                {errors.title?.message}⚠️
              </strong>
            )}
          </Group>
          <Group controlId="description" className="form__item">
            <Label className="form__label">Description</Label>
            <Control
              ref={register}
              type="text"
              placeholder="Enter a description"
              size="sm"
              name="description"
              autoComplete="on"
              as="textarea"
              rows="5"
            />
            {errors.description && (
              <strong className="form__warning">
                {errors.description?.message}⚠️
              </strong>
            )}
          </Group>
          <Group controlId="categories" className="form__item">
            <Label className="form__label">Catagoria</Label>
            <Control
              ref={register}
              type="text"
              placeholder="Choose a categorie"
              size="sm"
              name="categorie"
              as="select"
              onChange={(e) => handleChange(e)}
              value={form.categorie}
            >
              <option>GPU</option>
              <option>SDD</option>
              <option>HDD</option>
              <option>RAM</option>
              <option>CPU</option>
            </Control>
            {errors.categories && (
              <strong className="form__warning">
                {errors.categories?.message}⚠️
              </strong>
            )}
          </Group>
          <Group controlId="price" className="form__item">
            <Label className="form__label">Price</Label>
            <Control
              ref={register}
              type="range"
              size="sm"
              name="price"
              autoComplete="on"
              max="1000.00"
              min="0.00"
              step={1}
              value={register('price')}
              onChange={(e) => {
                setValue("price", e.target.value);
                console.log(e.target.value);
              }}
            />
            <div>
              <Label className="form__label">{getValues("price")}$</Label>
            </div>
            {errors.price && (
              <strong className="form__warning">
                {errors.price?.message}⚠️
              </strong>
            )}
          </Group>
          <Group controlId="file" className="form__item">
            <Label className="form__label">Media</Label>
            <File onChange={() => previewFile()} />
            <Control
              hidden
              ref={register}
              name="file"
              defaultValue={file.value}
            />
            <div className="form__img__container">
              <img className={file.class} src="" />
            </div>
          </Group>
          <Control
            hidden
            name="contract"
            defaultValue="product"
            ref={register}
          />
        </>
      )}
    />
  );
}
