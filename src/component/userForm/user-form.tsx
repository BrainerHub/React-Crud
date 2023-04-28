import React, { useEffect, useState } from "react";
import { IState } from "../../types/types";


import getLocalItems from "../crud-function/local-storage-data";
import validate from "../crud-function/validation";
import CrudCompoData from "../userList/user-list";
import "./user-form.scss";


const CrudCompo = () => {
  const [formErrors, setFormErrors] = useState<any>({});
  const [editToggle, setEditToggle] = useState<boolean>(true);
  const [isEditId, setIsEditId] = useState<number>();
  const [data, setData] = useState<any>(getLocalItems());
  const [formValues, setFormValues] = useState<IState>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
    gender: "",
    bloodGroup: "",
    degree: "",
  });

  const changeHandler = (event: any) => {
    setFormErrors({});
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]);

// Edit User data  
  const editItems = (id: number) => {
    let newEditItem = data.find((elem: any, index: number) => {
      return index === id;
    });
    setEditToggle(false);
    setFormValues(newEditItem);
    console.log(formValues);
    setIsEditId(id);
    setFormErrors({});
  };

// Delete list data 
  const deleteItems = (id: number) => {
    const filterData = data.filter((elem: any, index: number) => {
      return index !== id;
    });
    setData(filterData);
  };

// Submit Form onClick 
  const submitHandler = (event: any): void => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    if (!formValues) {
      alert("fill data");
    } else if (formValues && !editToggle) {
      if (
        formValues.firstName.length > 0 &&
        formValues.lastName.length > 0 &&
        formValues.email.length > 0 &&
        formValues.phone.length > 0 &&
        formValues.password.length > 0 &&
        formValues.confirm_password.length > 0 &&
        formValues.gender.length > 0 &&
        formValues.bloodGroup.length > 0 &&
        formValues.degree.length > 0
      ) {
        if (formValues.password === formValues.confirm_password) {
          setData(
            data.map((elem: any, index: number) => {
              if (index === isEditId) {
                return {
                  ...elem,
                  firstName: formValues.firstName,
                  middleName: formValues.middleName,
                  lastName: formValues.lastName,
                  email: formValues.email,
                  phone: formValues.phone,
                  password: formValues.password,
                  confirm_password: formValues.confirm_password,
                  gender: formValues.gender,
                  bloodGroup: formValues.bloodGroup,
                  degree: formValues.degree,
                };
              }
              return elem;
            })
          );
          setEditToggle(true);
          setFormValues({
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            confirm_password: "",
            gender: "",
            bloodGroup: "",
            degree: "",
          });
          alert("Data Update success");
        } else {
          alert("password and confirm password does not match");
        }
      } else {
        alert("please fill data after submit form");
      }
    } else {
      if (
        formValues.firstName.length > 0 &&
        formValues.lastName.length > 0 &&
        formValues.email.length > 0 &&
        formValues.phone.length > 0 &&
        formValues.password.length > 0 &&
        formValues.confirm_password.length > 0 &&
        formValues.gender.length > 0 &&
        formValues.bloodGroup.length > 0 &&
        formValues.degree.length > 0
      ) {
        if (formValues.password === formValues.confirm_password) {
          setData([...data, formValues]);
          setFormValues({
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            confirm_password: "",
            gender: "",
            bloodGroup: "",
            degree: "",
          });
          alert("Data added success");
        } else {
          alert("password and confirm password does not match");
        }
      } else {
        alert("please fill data after submit form");
      }
    }
  };

  return (
    <div className="dataTemplate">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <form className="dataTemplate__card" onSubmit={submitHandler}>
              <div className="dataTemplate__header">
                <h2 className="dataTemplate__title">
                  {editToggle ? "Add Data" : "Update Data"}
                </h2>
              </div>
              <div className="dataTemplate__body">
                <div className="row">
                  <div className="col-md-4 ">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formValues.firstName}
                        onChange={changeHandler}
                        className="form-control"
                      />
                      <div className="text-danger error-text">
                        {formErrors.firstName}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="form-group">
                      <label className="form-label">Middle Name</label>
                      <input
                        type="text"
                        name="middleName"
                        value={formValues.middleName}
                        onChange={changeHandler}
                        className="form-control"
                      />
                      <div className="text-danger error-text">
                        {formErrors.middleName}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formValues.lastName}
                        onChange={changeHandler}
                        className="form-control"
                      />
                      <div className="text-danger error-text">
                        {formErrors.lastName}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={changeHandler}
                        className="form-control"
                      />
                      <div className="text-danger error-text">
                        {formErrors.email}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input
                        type="number"
                        name="phone"
                        value={formValues.phone}
                        onChange={changeHandler}
                        className="form-control"
                      />
                      <div className="text-danger error-text">
                        {formErrors.phone}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={changeHandler}
                        className="form-control"
                        id="inputPassword"
                      />
                      <div className="text-danger error-text">
                        {formErrors.password}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Confirm password</label>
                      <input
                        type="password"
                        name="confirm_password"
                        value={formValues.confirm_password}
                        onChange={changeHandler}
                        className="form-control"
                        id="inputPassword1"
                      />
                      <div className="text-danger error-text">
                        {formErrors.confirm_password}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="form-label ">Blood Group </label>
                      <select
                        className="form-select form-select-sm"
                        value={formValues.bloodGroup}
                        onChange={changeHandler}
                        name="bloodGroup"
                        aria-label=".form-select-sm example"
                      >
                        <option value="" disabled={true}></option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                      <div className="text-danger error-text">
                        {formErrors.bloodGroup}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="form-group">
                      <label className="form-label">Gender : </label>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          checked={formValues.gender === "male"}
                          onChange={changeHandler}
                          name="gender"
                          id="male"
                          value="male"
                        />
                        <label className="form-check-label" htmlFor="male">
                          male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          checked={formValues.gender === "female"}
                          onChange={changeHandler}
                          name="gender"
                          id="female"
                          value="female"
                        />
                        <label className="form-check-label" htmlFor="female">
                          female
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          checked={formValues.gender === "other"}
                          onChange={changeHandler}
                          name="gender"
                          id="Other"
                          value="other"
                        />
                        <label className="form-check-label" htmlFor="Other">
                          Other
                        </label>
                      </div>
                      <div className="text-danger error-text">
                        {formErrors.gender}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Degree : </label>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          checked={formValues.degree === "BCA"}
                          onChange={changeHandler}
                          name="degree"
                          type="checkbox"
                          id="BCA"
                          value="BCA"
                        />
                        <label className="form-check-label" htmlFor="BCA">
                          BCA
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          checked={formValues.degree === "MCA"}
                          onChange={changeHandler}
                          name="degree"
                          type="checkbox"
                          id="MCA"
                          value="MCA"
                        />
                        <label className="form-check-label" htmlFor="MCA">
                          MCA
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          checked={formValues.degree === "BBA"}
                          onChange={changeHandler}
                          name="degree"
                          type="checkbox"
                          id="BBA"
                          value="BBA"
                        />
                        <label className="form-check-label" htmlFor="BBA">
                          BBA
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          checked={formValues.degree === "MBA"}
                          onChange={changeHandler}
                          name="degree"
                          type="checkbox"
                          id="MBA"
                          value="MBA"
                        />
                        <label className="form-check-label" htmlFor="MBA">
                          MBA
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          checked={formValues.degree === "Bsc"}
                          onChange={changeHandler}
                          name="degree"
                          type="checkbox"
                          id="Bsc"
                          value="Bsc"
                        />
                        <label className="form-check-label" htmlFor="Bsc">
                          Bsc
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          checked={formValues.degree === "Msc"}
                          onChange={changeHandler}
                          name="degree"
                          type="checkbox"
                          id="Msc"
                          value="Msc"
                        />
                        <label className="form-check-label" htmlFor="Msc">
                          Msc
                        </label>
                      </div>
                      <div className="text-danger error-text">
                        {formErrors.degree}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    {editToggle ? (
                      <div className="dataTemplate__form-btn">
                        <input type="submit" className="btn btn-primary" />
                      </div>
                    ) : (
                      <div className="dataTemplate__form-btn">
                        <button className="btn btn-info">update</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-7">
            <div className="dataTemplate__card">
              <div className="dataTemplate__header">
                <h2 className="dataTemplate__title">User Data</h2>
              </div>

              <div className="dataTemplate__body">
                {data.length > 0 ? (
                  <CrudCompoData
                    data={data}
                    editItems={editItems}
                    deleteItems={deleteItems}
                  />
                ) : (
                  <div className="blank-data">Data is not added</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrudCompo;
