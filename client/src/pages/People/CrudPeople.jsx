import { DatePicker, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllMembers } from "../../redux/features/memberslice";
import { fetchMembers } from "../../redux/features/members.thunk";
import PageLoader from "../../components/PageLoader";

const CrudPeople = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const [dateValue, setDateValue] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchMembers());
  }, []);

  // const handleChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Split the name by '.' to get nested property names
    const propertyNames = name.split(".");

    // If there's only one property, update the state directly
    if (propertyNames.length === 1) {
      setFormData({ ...formData, [name]: value });
    } else {
      // If there are nested properties, update them accordingly
      const nestedObject = { ...formData };
      let currentObject = nestedObject;
      for (let i = 0; i < propertyNames.length; i++) {
        const propertyName = propertyNames[i];
        if (i === propertyNames.length - 1) {
          // Last property, set the value
          currentObject[propertyName] = value;
        } else {
          // Nested property, create the object if not exist
          currentObject[propertyName] = currentObject[propertyName] || {};
          // Move to the next nested object
          currentObject = currentObject[propertyName];
        }
      }
      // Update the state with the modified nested object
      setFormData(nestedObject);
    }
  };

  const onDateValueChange = (date, dateString) => {
    setDateValue(Date.parse(date));
    setFormData({ ...formData, redemptionDate: dateString });
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    console.log("d",formData);
    try {
      await axios.post('https://eglise.onrender.com/api/members', formData);
      // Reset form after successful submission
      setFormData({});
      dispatch(fetchMembers());
      setLoading(false);
      setOpen(false);
    } catch (error) {
      setLoading(false);
      console.error("Error creating member:", error);
      setOpen(false);
    }
  };
  return (
    <div className="flex flex-row h-100 justify-between">
      <h1>People</h1>
      <div className="flex justify-evenly">
        {/* <h1>Search</h1> */}
        <Input defaultValue="Search" />
        <Button type="primary" onClick={() => setOpen(true)}>
          Add
        </Button>
      </div>
      <Modal
        title="ADD PEOPLE"
        centered
        open={open}
        footer={[
          <div>
            {loading ? (
              // <Button type="primary">Save</Button>
              <PageLoader />
            ) : (
              <Button type="primary" onClick={(e) => handleSubmit(e)}>
                Save
              </Button>
            )}
          </div>,
        ]}
        // onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={700}
      >
        {/* <form class="w-full overflow-hidden overflow-y-auto h-500"> */}
        <form
          style={{ overflow: "hidden", overflowY: "auto", height: "550px" }}
          class="w-full px-4 overflow-hidden overflow-y-auto h-['400px']"
        >
          <div class="flex flex-wrap -mx-3 mb-1">
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Names
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                defaultValue="Muhozi kyaguranyi"
                name="names"
                onChange={handleChange}
              />
              {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Father's Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                defaultValue="Museveni Kaguta"
                name="father"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-1">
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Mother's Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                defaultValue="Janet Museveni"
                name="mother"
                onChange={handleChange}
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Id
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                defaultValue="1180029292922558"
                name="id"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-1">
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Telephone
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                defaultValue="0788382405"
                name="telephone"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-1">
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Redemption Place
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                defaultValue="Doe"
                name="redemptionPlace"
                onChange={handleChange}
              />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Redemption Date
              </label>
              <DatePicker
                onChange={onDateValueChange}
                style={{
                  height: "2.8rem",
                  width: "100%",
                  border: "none",
                  borderRadius: "0px",
                  cursor: "pointer",
                  fontSize: "17px",
                  background: "#E5E7EB",
                }}
              />
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"></div>
          <div class="flex flex-wrap -mx-3 mb-1">
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Role
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="role"
                  onChange={handleChange}
                >
                  <option value="Diyakoni">Diyakoni</option>
                  <option value="Umukristu">Umukristu</option>
                  <option value="Umwana">Umwana</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Zone
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="zone"
                  onChange={handleChange}
                >
                  <option value="Kimiko">Kimiko</option>
                  <option value="Muhama">Muhama</option>
                  <option value="Nyankokoma">Nyankokoma</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-1">
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Birthplace province
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                defaultValue="Nord"
                name="birthPlace.province"
                onChange={handleChange}
              />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Birthplace district
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                defaultValue="Gicumbi"
                name="birthPlace.district"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-1">
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Birthplace sector
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                defaultValue="Rukomo"
                name="birthPlace.sector"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-1">
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Destiny province
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                defaultValue="Nord"
                name="destinyPlace.province"
                onChange={handleChange}
              />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                destiny district
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                defaultValue="Gicumbi"
                name="destinyPlace.district"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-1">
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                destiny sector
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                defaultValue="Nord"
                name="destinyPlace.sector"
                onChange={handleChange}
              />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                destiny cell
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                defaultValue="Kimiko"
                name="destinyPlace.cell"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-1">
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                immigrant
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="immigrant"
                  onChange={handleChange}
                >
                  <option value="yego">yego</option>
                  <option value="oya">oya</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                emmigrant
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="emmigrant"
                  onChange={handleChange}
                >
                  <option value="yego">yego</option>
                  <option value="oya">oya</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-1">
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                dead
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="dead"
                  onChange={handleChange}
                >
                  <option value="yego">yego</option>
                  <option value="oya">oya</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CrudPeople;
