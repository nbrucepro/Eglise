import React, { useEffect, useState } from "react";
import { Input, Layout, Table } from "antd";
import CrudPeople from "./CrudPeople";
import { useSelector } from "react-redux";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";
import moment from "moment/moment";
const { Content } = Layout;

const People = () => {
  const { members } = useSelector((state) => state.membersSlice);
  const [dataTable, setDataTable] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const data = [];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (members?.length > 0) {
      for (let i = 0; i < members?.length; i++) {
        const dateString = members[i].redemptionDate;
        const formattedDate = moment(dateString).format("DD/MM/YYYY");
        data.push({
          key: i,
          name: members[i]?.names,
          father: members[i]?.father,
          mother: members[i]?.mother,
          id: members[i]?.id,
          telephone: members[i]?.telephone,
          redemptionPlace: members[i]?.redemptionPlace,
          redemptionDate: formattedDate,
          role: members[i]?.role,
          zone: members[i]?.zone,
          bprovince: members[i]?.birthPlace?.province,
          bdistrict: members[i]?.birthPlace?.district,
          bsector: members[i]?.birthPlace?.sector,
          province: members[i]?.destinyPlace?.province,
          district: members[i]?.destinyPlace?.district,
          sector: members[i]?.destinyPlace?.sector,
          cell: members[i]?.destinyPlace?.cell,
          immigrant: members[i]?.immigrant,
          emmigrant: members[i]?.emmigrant,
          dead: members[i]?.dead,
        });
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setDataTable(data);
  }, [members]);
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = dataTable?.filter((member) =>
    member?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  return (
    <div className="whiteBox shadow layoutPadding">
      <div className="flex justify-between items-center">
        <div className="flex justify-evenly items-center ">
        <h1 className="font-bold">People</h1>
        <Input onChange={handleSearch} placeholder="Search" className="ml-4" />
        </div>
      <CrudPeople />
      </div>
      <Content
        style={{
          margin: "30px auto",
          width: "100%",
          maxWidth: "100%",
          flex: "none",
        }}
      >
        <Table
          // columns={columns}
          dataSource={filteredData}
          pagination={{
            pageSize: 30,
          }}
          scroll={{
            y: 350,
            x: 2300,
            // x: true,
          }}
          loading={loading}
        >
          <Column width={150} title="Amazina yombi" dataIndex="name" key="name" />
          <Column
            width={150}
            title="Se"
            dataIndex="father"
            key="father"
          />
          <Column
            width={150}
            title="Nyina"
            dataIndex="mother"
            key="mother"
          />
          <Column title="ID" width={180} dataIndex="id" key="id" />
          <Column
            width={150}
            title="Telephone"
            dataIndex="telephone"
            key="telephone"
          />
          <Column
            title="Aho yabatirijwe"
            dataIndex="redemptionPlace"
            key="redemptionPlace"
            width={150}
          />
          <Column
            title="Igihe yabatirijwe"
            dataIndex="redemptionDate"
            key="redemptionDate"
            width={150}
          />
          <Column title="Inshingano" width={150} dataIndex="role" key="role" />
          <Column title="Itoreroshingiro" width={150} dataIndex="zone" key="zone" />
          <ColumnGroup title="Aho yavukiye">
            <Column width={100} title="Intara" dataIndex="bprovince" key="bprovince" />
            <Column width={100} title="Akarere" dataIndex="bdistrict" key="bdistrict" />
            <Column width={100} title="Umurenge" dataIndex="bsector" key="bsector" />
          </ColumnGroup>
          <ColumnGroup title="Aho atuye">
            <Column width={100} title="Intara" dataIndex="province" key="province" />
            <Column width={100} title="Akarere" dataIndex="district" key="district" />
            <Column width={100} title="Umurenge" dataIndex="sector" key="sector" />
            <Column width={100} title="Akagali" dataIndex="cell" key="cell" />
          </ColumnGroup>
          <Column title="Uwaturutse ahandi" width={160} dataIndex="immigrant" key="immigrant" />
          <Column title="Uwimukiye ahandi" width={150} dataIndex="emmigrant" key="emmigrant" />
          <Column title="Uwitabye Imana" width={150} dataIndex="dead" key="dead" />
        </Table>
      </Content>
    </div>
  );
};
export default People;
