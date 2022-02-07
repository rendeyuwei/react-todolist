import React, { Component } from 'react'
import { Row, Col, Checkbox, Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

export default class ToDoFooter extends Component {
    constructor(props) {
        super(props)
    }

    changeAll = (e) => {
        this.props.changeAll(e.target.checked)
    }

    showConfirmDeleteAll = () => {
        const that = this
        confirm({
            title: '是否删除所有已选任务？',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                that.props.deleteAll()
            },
        })
    }

    render() {
        const todos = this.props.todo
        let alreadyDone = 0
        todos.forEach(element => {
            if (element.done) {
                alreadyDone = alreadyDone + 1
            }
        });
        return (
            <div style={{ marginTop: '10px' }}>
                <Row>
                    <Col span={4}><Checkbox checked={alreadyDone === todos.length && todos.length !== 0 ? true : false} onChange={this.changeAll}></Checkbox></Col>
                    <Col span={16}>已完成{alreadyDone} / 全部{todos.length}</Col>
                    <Col span={4}><Button type="primary" onClick={this.showConfirmDeleteAll}>清除</Button></Col>
                </Row>
            </div>
        )
    }
}
