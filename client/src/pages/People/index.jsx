import React, { useEffect, useState } from "react";
import { Layout, Table } from "antd";
import CrudPeople from "./CrudPeople";
import { useSelector } from "react-redux";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";
import moment from "moment/moment";

const { Content } = Layout;

const People = () => {
  const { members } = useSelector((state) => state.membersSlice);
  const [dataTable, setDataTable] = useState([]);
  const data = [];

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
    setDataTable(data);
  }, [members]);

  return (
    <div className="whiteBox shadow layoutPadding">
      <CrudPeople />
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
          dataSource={dataTable}
          pagination={{
            pageSize: 30,
          }}
          scroll={{
            y: 350,
            x: 2300,
            // x: true,
          }}
          loading={dataTable?.length == 0}
        >
          <Column width={150} title="Names" dataIndex="name" key="name" />
          <Column
            width={150}
            title="Father's names"
            dataIndex="father"
            key="father"
          />
          <Column
            width={150}
            title="Mother's names"
            dataIndex="mother"
            key="mother"
          />
          <Column title="Id" dataIndex="id" key="id" />
          <Column
            width={150}
            title="Telephone"
            dataIndex="telephone"
            key="telephone"
          />
          <Column
            title="Redemption Place"
            dataIndex="redemptionPlace"
            key="redemptionPlace"
            width={150}
          />
          <Column
            title="Redemption Date"
            dataIndex="redemptionDate"
            key="redemptionDate"
            width={150}
          />
          <Column title="Role" dataIndex="role" key="role" />
          <Column title="Zone" dataIndex="zone" key="zone" />
          <ColumnGroup title="Birth Place">
            <Column title="Province" dataIndex="bprovince" key="bprovince" />
            <Column title="District" dataIndex="bdistrict" key="bdistrict" />
            <Column title="Sector" dataIndex="bsector" key="bsector" />
          </ColumnGroup>
          <ColumnGroup title="Destiny Place">
            <Column title="Province" dataIndex="province" key="province" />
            <Column title="District" dataIndex="district" key="district" />
            <Column title="Sector" dataIndex="sector" key="sector" />
            <Column title="Cell" dataIndex="cell" key="cell" />
          </ColumnGroup>
          <Column title="Immigrant" dataIndex="immigrant" key="immigrant" />
          <Column title="Emmigrant" dataIndex="emmigrant" key="emmigrant" />
          <Column title="Dead" dataIndex="dead" key="dead" />
        </Table>
      </Content>
    </div>
  );
};
export default People;
