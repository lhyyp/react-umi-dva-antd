import React, { Component } from 'react';
import { Table, LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

export default class HehTable extends Component {
  constructor() {
    super();
    this.state = {
      selectedRowKeys: [],
    };
  }

  componentDidMount () {
  }

  onSelectChange = (selectedRowKeys,selectedRows) => {
    this.setState({ selectedRowKeys });
    if (this.props.selectedRowKeys) {
      this.props.selectedRowKeys(selectedRowKeys,selectedRows);
    }
  };

  render () {
    const { dataSource, columns, onShowSizeChange, pageChange, loading, selectedList,size, bordered, rowSelection ,pageIndex,total} = this.props;
    // 判断是否可以勾选
    let selection;
    if (this.props.rowSelection != undefined) {
      selection = null;
    } else {
      selection = {
        selectedRowKeys:selectedList || this.state.selectedRowKeys,
        onChange: this.onSelectChange,
      };
    }
    return (
      <LocaleProvider locale={zhCN}>
        <Table
          style={{ background: '#FFF' }}
          size={size}
          bordered={bordered}
          dataSource={dataSource}
          columns={columns}
          rowSelection={selection}
          pagination={{
            onChange: pageChange,
            total: total,
            pageSizeOptions:['10','20','50','100','200','500'],
            onShowSizeChange,
            current: pageIndex,
            hideOnSinglePage: false,
            showSizeChanger: true,
            showQuickJumper: true,
            style: { margin: 15 },
            size: 'default',
            showTotal: (total => `共 ${total} 条`),
          }}
          loading={loading}
          rowKey={(record,index)=>{ return record.id ? record.id  :index}}
        />
      </LocaleProvider>
    );
  }
}
