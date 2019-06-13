import React from 'react'
import {
    TreeSelect, Button, Breadcrumb, Switch, Modal,
    Form, Table, Pagination, message, Select, InputNumber, Spin, Input
} from 'antd';
import 'antd/dist/antd.css';

import datajson from "./util/data";

const { Column } = Table;
const FormItem = Form.Item;
const Option = Select.Option;

class MovieContainer extends React.Component {
    state = {
        dataStore: []
    }


    componentWillMount() {
        let data = datajson
        this.setState( {
            dataStore: data.obj
        } )
    }

    xuanze = e => {
        e.preventDefault();
        this.props.form.validateFields( ( err, values ) => {
            if ( !err ) {
               let conditionArr = values
                let tempFilter = {}
                let data = datajson.obj
                for(let key in conditionArr){
                     if(conditionArr[key]!="undefind" && conditionArr[key]!="null" && conditionArr[key] != null && conditionArr !=""){
                         tempFilter[key] = conditionArr[key]
                     }
                }
                let resultArr =data.filter(
                    (item) =>{
                         let flag = false
                        for(let key in tempFilter){
                            if(item[key].toString().indexOf( tempFilter[key].toString()) >=0 ){
                                flag = true
                            }else{
                                flag = false
                                break
                            }
                        }
                        if(flag){
                            return item;
                        }
                    }
                )
            console.log('数据',resultArr)
                this.setState({
                    dataStore:resultArr
                })
            }
        } );
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return <div>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator( 'name' )(
                        <Input placeholder={"名字"}
                               style={{ width: 200 }}
                        />
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator( 'sex' )(
                        <Input placeholder={"性别"}
                               style={{ width: 200 }}
                        />
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator( 'age' )(
                        <Input placeholder={"年龄"}
                               style={{ width: 200 }}
                        />
                    )}
                </Form.Item>

                <Form.Item>
                    <Button type="primary" onClick={this.xuanze}>筛选</Button>
                </Form.Item>
            </Form>


            <Table
                pagination={false}
                rowKey={record => record.id}
                style={{ marginTop: '10px' }}
                dataSource={this.state.dataStore}
            >
                <Column
                    title="序号"
                    key={( text, record, index ) => record.id}
                    render={( text, record, index ) => `${index + 1}`}
                />
                <Column title="姓名" dataIndex="name" key="name"/>
                <Column title="性别" dataIndex="sex" key="sex"/>
                <Column title="年龄" dataIndex="age" key="age"/>

            </Table>


        </div>
    }
}

export default Form.create()( MovieContainer );