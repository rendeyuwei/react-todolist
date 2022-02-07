import React from 'react'
import PropTypes from 'prop-types';
import { List, Checkbox, Button, Row, Space, Modal } from 'antd'
import { DeleteOutlined, ExclamationCircleOutlined  } from '@ant-design/icons';

const { confirm } = Modal;


class ToDoList extends React.Component {

    constructor(props) {
        super(props)
        this.state = { isMouseEnter: false, id: '', confirmDelete: false }
    }

    render() {
        const bgColor = this.state.isMouseEnter ? '#ddd' : '#fff'
        return (
            <List
                dataSource={this.props.todo}
                renderItem={item => (
                    <List.Item
                        style={{ background: item.id === this.state.id ? bgColor : '#fff' }}
                        key={item.id}
                        id={item.id}
                        actions={[
                            <Button
                                icon={<DeleteOutlined />}
                                onClick={() => this.showConfirmDelete(item.id)}
                                style={{ display: item.id === this.state.id ? 'block' : 'none' }} />
                        ]}
                        onMouseEnter={this.onFocus}
                        onMouseLeave={this.onLeave}>
                        <Row>
                            <Space size={'small'}>
                                <Checkbox onChange={(e) => this.onChange(item.id, e)} checked={item.done}></Checkbox> {item.name}
                            </Space>
                        </Row>

                    </List.Item>
                )} >
            </List>
        )
    }

    onChange = (id, e) => {
        // 两种写法，使用柯里化 or 不使用柯里化
        // return (e) => {
        //     // console.log(id);
        //     // console.log(e);
        //     this.props.updateToDoDone(id, e.target.checked)
        // }
        this.props.updateToDoDone(id, e.target.checked)
    }

    onFocus = (e) => {
        this.setState({ isMouseEnter: true, id: e.target.id })
    }

    onLeave = (e) => {
        this.setState({ isMouseEnter: false, id: '' })
    }

    showConfirmDelete = (id) => {
        const that = this
        confirm({
            title: '确定是否删除该任务？',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                that.props.deleteToDo(id)
            },
        })
    }
}

ToDoList.propTypes = {
    todo: PropTypes.array,
    updateToDoDone: PropTypes.func
}

export default ToDoList