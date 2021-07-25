import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Pagination, Layout, Spin, Alert } from 'antd';
import { listCharacter } from './../../actions/CharacterActions';

const {  Content } = Layout;

export const ListOfCharacters = () => {
    const CharacterList = useSelector(state => state.CharacterList);
    const {people, loading, error, pages} = CharacterList;
    const dispatch = useDispatch();
    const indexStart = 1;
    const [currPage, setCurrPage] = useState(1);

    useEffect(() => {

        dispatch(listCharacter({indexStart}));
    }, []);

    const processNA =(data)=>{
      //this code in https://stackoverflow.com/questions/33332001/javascript-validation-error-not-valid-value-n-a
      return data.match(/^n\s*[/]\s*a$/) ? 'unknown':data;  // set "unknown" value for the "n/a" value, 
    }

    const dataSource = people?.map((person) => ({
        key: person.name,
        name: processNA(person.name),
        height: processNA(person.height),
        mass: processNA(person.mass),
        hair_color: processNA(person.hair_color),
        skin_color: processNA(person.skin_color),
        eye_color: processNA(person.eye_color),
        birth_year: processNA(person.birth_year),
        gender: processNA(person.gender),

    }));
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Height",
        dataIndex: "height",
        key: "height",
      },
      {
        title: "Mass",
        dataIndex: "mass",
        key: "mass",
      },
      {
        title: "Hair Color",
        dataIndex: "hair_color",
        key: "hair_color",
      },
      {
        title: "Skin Color",
        dataIndex: "skin_color",
        key: "skin_color",
      },
      {
        title: "Eye Color",
        dataIndex: "eye_color",
        key: "eye_color",
      },
      {
        title: "Birth Year",
        dataIndex: "birth_year",
        key: "birth_year",
      },
      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
      },
    ];
    
    const handleTableChange = (pagination) => {
      setCurrPage(pagination);
      dispatch(listCharacter({pagination}));
    };

    return (
      <Layout>
        <Content style={{ margin: "10px" }}>
          <h1 style={{ textAlign: "center", margin: "10px" }}>
            List of Star Wars Characters
          </h1>
          {error ? (
            <Alert style={{textAlign:'center'}} message={error} type="error" />
          ) : (
            <>
              <Spin spinning={loading} size='large' tip="Loading...">
                <Table
                  style={{ marginLeft: "60px", marginRight: "60px" }}
                  dataSource={dataSource}
                  columns={columns}
                  pagination={false}
                />
              </Spin>

              <Pagination
                style={{ textAlign: "center", marginTop: "10px" }}
                total={pages}
                pageSizeOptions={[10]}
                onChange={handleTableChange}
                current={currPage}
              />
            </>
          )}
        </Content>
      </Layout>
    );
}
