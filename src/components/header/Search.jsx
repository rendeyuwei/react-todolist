import React from 'react'
import PropTypes from 'prop-types';
import { Input } from 'antd'
import { nanoid } from 'nanoid'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

    addToDo = (e) => {
        if (e.target.value !== '') {
            const data = { id: nanoid(), name: e.target.value, done: false }
            this.props.addToDo(data)
            this.setState({ value: '' })
        }
    }

    change = (e) => {
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <Input
                placeholder='点击回车添加项'
                style={{ marginBottom: '10px' }}
                onPressEnter={this.addToDo}
                value={this.state.value}
                onChange={this.change} />
        )
    }
}

Search.propTypes = {
    addToDo: PropTypes.func
}

export default Search