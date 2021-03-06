import template from './index.html'
import ko from 'knockout'
import ycloud from 'ycloud'
import '@/components'
function init () {
  var viewmodel = {
    extraEdit: function (vm) {
      console.log(vm)
    },
    codeExtra: `
      <template>
        <y-tree params="extraText:'编辑', extraEdit: $root.extraEdit,data:$root.treeData, height:'200px', loadData:$root.loadData"></y-tree>
      </template>
      <script >
      // 其他参数设置参考标准树的实现
        var vm = {
          extraEdit: function (vm) {
            console.log(vm)
          }
        }
      </script>
    `,
    codeNodeOption: `
      <template>
        <div class="code-top">
          <y-tree params="multiple: true,nodeOption: $root.nodeOption, data:$root.treeOptionData, height:'200px'"></y-tree>
        </div>      
      </template>
      <script>
        var viewmodel = {
          showCheck: function (data) {
            return data.isDepartment
          },
          nodeIcon: function (data) {
            if (data.isDepartment) {
              return 'fa fa-list'
            } else {
              return ''
            }
          }
        }
      </script>
    `,
    nodeOption: {
      showCheck: function (data) {
        return data.isDepartment
      },
      nodeIcon: function (data) {
        if (data.isDepartment) {
          return 'fa fa-list'
        } else {
          return ''
        }
      }
    },
    code: `
      <template>
        <y-tree params="
        data:treeData, 
        height:'200px',
        onChange: handleTreeSelect"></y-tree>
      </template>
      <script>
      var viewmodel = {
         treeData: ko.observable([{
          id: 1, name: '北京总公司', children: [
            {
              id: 2, name: '上海分公司', children: []
            },
            {
              id: 3, name: '福建分公司', children: [
              {
                id: 4, name: '福州分公司', children: []
              },
              {
                id: 5, name: '厦门分公司', children: []
              }
            ]
            }
          ]
        }]),
        handleTreeSelect (data) {
          ycloud.notice.info(JSON.stringify(data))
        }
      };
      </script>
    `,
    codeCheckbox: `
    <template>
        <y-tree params="
        selectedId: ko.observableArray[3,4],
        selectedItem:$root.treeSelectedItems,
        multiple:true,
        data:$parent.asyncTreeData, 
        height:'200px', 
        loadData:$parent.loadData"></y-tree>
      </template>
      <script>
      var viewmodel = {
        asyncTreeData: ko.observableArray([{id: 1, name: '全部'}]),
        treeSelectedItems: ko.observableArray(),
        loadData: function (params, cb) {
          // 根据实际业务需求查询数据并返回
          if (params.name !== '没有子节点') {
            // 模拟异步请求
            setTimeout(()=> {
              cb([{id:Math.random(),name:'含有子节点'}, {id:Math.random(),name:'没有子节点'}])
            }, 500)
    
          } else {
            cb(null)
          }
        },
      }
      </script>
    `,
    code2: `
    <template>
        <y-tree params="
          data:asyncTreeData, 
          height:'200px', 
          loadData:loadData">
        </y-tree>
      </template>
      <script>
      var viewmodel = {
        asyncTreeData: ko.observableArray([{id: 1, name: '全部'}]),
        loadData: function (params, cb) {
          // 根据实际业务需求查询数据并返回
          if (params.name !== '没有子节点') {
            // 模拟异步请求
            setTimeout(()=> {
              cb([{id:Math.random(),name:'含有子节点'}, {id:Math.random(),name:'没有子节点'}])
            }, 500)
    
          } else {
            cb(null)
          }
        },
      }
      </script>
    `,
    loadData: function (params, fn) {
      if (params.name !== '没有子节点') {
        setTimeout(function () {
          fn([{id: Math.random(), name: '含有子节点'}, {id: Math.random(), name: '没有子节点'}])
        }, 500)
      } else {
        fn(null)
      }
    },
    asyncTreeData: ko.observableArray([{id: 1, name: '全部'}]),
    treeSelectedItems: ko.observableArray(),
    treeOptionData: ko.observableArray([{
      id: 1,
      name: '组织1',
      isDepartment: false,
      children: [{
        id: 2,
        name: '部门1',
        isDepartment: true
      }, {
        id: 3,
        name: '组织2',
        isDepartment: false,
        children: [{
          id: 4,
          name: '部门2',
          isDepartment: true
        }, {
          id: 5,
          name: '部门3',
          isDepartment: true
        }]
      }]
    }]),
    treeData: ko.observable([{
      id: 1,
      name: '北京总公司',
      children: [
        {
          id: 2,
          name: '上海分公司',
          children: []
        },
        {
          id: 3,
          name: '福建分公司',
          children: [
            {
              id: 4, name: '福州分公司', children: []
            },
            {
              id: 5, name: '厦门分公司', children: []
            }
          ]
        }
      ]
    }]),
    handleTreeSelect (data) {
      ycloud.notice.info(JSON.stringify(data))
    }
  }
  ko.applyBindings(viewmodel, document.getElementById('app'))
}
export default {
  template,
  init
}
