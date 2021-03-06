import template from './index.html'
import ko from 'knockout'
import '@/components'
function init () {
  let viewmodel = {
    code: [
      `
      <template>
        <y-button params="type:'ghost', click:$parent.showModal">显示弹框</y-button>
        <y-modal params="stopMaskClick:true, visible: $parent.modalVisible, width:'700px',title:'普通的Modal对话框',ok: $parent.handleOk">
          <p>我说</p>
          <p>短发短发</p>
          <p>姑娘</p>
        </y-modal>
      </template>
      <script>
        var viewmodel = {
          modalVisible: ko.observable(false),
          showModal: () => {
            viewmodel.modalVisible(true)
          },
          handleOk: function () {
            window.ycloud.notice.info('你点击了确定！')
          }
        }
      </script>
      `,
      `
      <template>
        <y-button params="type:'ghost', click:function(){$parent.showModal1($parents)}">显示弹框</y-button>
        <y-modal params="visible: $parent.modalVisible1, width:'700px',title:'添加校验的Modal对话框',validateFn:$root.validateFn,errormsg:'请至少选择一条数据！'">
          <y-grid params="ref:'modalgrid',columns: $root.columns,rows: $root.rows,onRowSelect:$root.onRowSelect,isStripe:true"></y-grid>
        </y-modal>
      </template>
      <script>
        var viewmodel = {
          modalVisible1: ko.observable(false),
          showModal1: (val) => {
            viewmodel.modalVisible1(true)
          },
          rows: ko.observableArray([
            {id: ko.observable(1), name: ko.observable('李明')},
            {id: ko.observable(2), name: ko.observable('韩梅梅')},
            {id: ko.observable(3), name: ko.observable('丹尼')}
          ]),
          columns: ko.observableArray([
            {
              title: '',
              field: 'id',
              type: 'checkbox',
              hidden: false,
              width: 50
            },
            {
              title: 'name',
              field: 'name',
              width: '20%'
            },
            {
              field: 'id',
              title: 'renderFn',
              type: 'render',
              hidden: false,
              renderFn: function (row, index) {
                return '<span>通过render函数生成的html片段<span>'
              }
            }, {
              field: 'id',
              title: 'operation',
              hidden: false,
              type: 'operation',
              width: '20%',
              operationList: [
                {
                  title: '操作1',
                  click: function (row, evt) {
                    alert('操作1')
                  }
                }
              ]
            }
          ]),
          onRowSelect: function (row) {},
          validateFn: function () {
            let grid = window.ycloud.$refs['modalgrid']
            if (grid.getSelectedRows().length > 0) {
              return true
            } else {
              return false
            }
          }
        } 
      </script>
      `,
      `
      <template>
        <y-button params="type:'ghost', click:$parent.showModal2">显示弹框</y-button>
        <y-modal params="visible: $parent.modalVisible2, width:'700px',title:'自动适配高度的Modal对话框'">
          <span>百家姓: </span>
          <y-grid params="modalBodyModalHeight:bodyMaxHeight,modalBodyExtraHeight:'20px',onRowSelect:$root.onRowSelect,columns: $root.columns,rows: $root.rows2,lockhead:true"></y-grid>
        </y-modal>
      </template>
      <script>
        var viewmodel = {
          modalVisible2: ko.observable(false),
          showModal2: (val) => {
            viewmodel.modalVisible2(true)
          },
          rows2: ko.observableArray([
            {id: ko.observable(1), name: ko.observable('赵')},
            {id: ko.observable(2), name: ko.observable('钱')},
            {id: ko.observable(3), name: ko.observable('孙')},
            {id: ko.observable(1), name: ko.observable('李')},
            {id: ko.observable(2), name: ko.observable('周')},
            {id: ko.observable(3), name: ko.observable('吴')},
            {id: ko.observable(1), name: ko.observable('郑')},
            {id: ko.observable(2), name: ko.observable('王')},
            {id: ko.observable(3), name: ko.observable('冯')},
            {id: ko.observable(3), name: ko.observable('陈')},
            {id: ko.observable(3), name: ko.observable('褚')},
            {id: ko.observable(3), name: ko.observable('卫')}
          ]),
          columns: ko.observableArray([
            {
              title: '',
              field: 'id',
              type: 'checkbox',
              hidden: false,
              width: 50
            },
            {
              title: 'name',
              field: 'name',
              width: '20%'
            },
            {
              field: 'id',
              title: 'renderFn',
              type: 'render',
              hidden: false,
              renderFn: function (row, index) {
                return '<span>通过render函数生成的html片段<span>'
              }
            }, {
              field: 'id',
              title: 'operation',
              hidden: false,
              type: 'operation',
              width: '20%',
              operationList: [
                {
                  title: '操作',
                  click: function (row, evt) {
                    alert('操作')
                  }
                }
              ]
            }
          ])
        }
      </script>
      `
    ],
    // 基本
    modalVisible: ko.observable(false),
    showModal: (val) => {
      viewmodel.modalVisible(true)
    },
    // 校验
    modalVisible1: ko.observable(false),
    showModal1: (val) => {
      viewmodel.modalVisible1(true)
    },
    // model最大高度
    modalVisible2: ko.observable(false),
    showModal2: (val) => {
      viewmodel.modalVisible2(true)
    },
    rows: ko.observableArray([
      {id: ko.observable(1), name: ko.observable('李明')},
      {id: ko.observable(2), name: ko.observable('韩梅梅')},
      {id: ko.observable(3), name: ko.observable('丹尼')}
    ]),
    rows2: ko.observableArray([
      {id: ko.observable(1), name: ko.observable('赵')},
      {id: ko.observable(2), name: ko.observable('钱')},
      {id: ko.observable(3), name: ko.observable('孙')},
      {id: ko.observable(1), name: ko.observable('李')},
      {id: ko.observable(2), name: ko.observable('周')},
      {id: ko.observable(3), name: ko.observable('吴')},
      {id: ko.observable(1), name: ko.observable('郑')},
      {id: ko.observable(2), name: ko.observable('王')},
      {id: ko.observable(3), name: ko.observable('冯')},
      {id: ko.observable(3), name: ko.observable('陈')},
      {id: ko.observable(3), name: ko.observable('褚')},
      {id: ko.observable(3), name: ko.observable('卫')}
    ]),
    columns: ko.observableArray([
      {
        title: '',
        field: 'id',
        type: 'checkbox',
        hidden: false,
        width: 50
      },
      {
        title: 'name',
        field: 'name',
        width: '20%'
      },
      {
        field: 'id',
        title: 'renderFn',
        type: 'render',
        hidden: false,
        renderFn: function (row, index) {
          return '<span>通过render函数生成的html片段<span>'
        }
      }, {
        field: 'id',
        title: 'operation',
        hidden: false,
        type: 'operation',
        width: '20%',
        operationList: [
          {
            title: '操作',
            click: function (row, evt) {
              alert('操作')
            }
          }
        ]
      }
    ]),
    onRowSelect: function (row) {},
    validateFn: function () {
      let grid = window.ycloud.$refs['modalgrid']
      if (grid.getSelectedRows().length > 0) {
        return true
      } else {
        return false
      }
    },
    handleOk: function () {
      window.ycloud.notice.info('你点击了确定！')
    }
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
