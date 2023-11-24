import { PureComponent } from 'react';
import { Card, Calendar, Tabs } from 'antd';
import type { Dayjs } from 'dayjs';
import type { CalendarProps, TabsProps } from 'antd';
import './index.less';

class Index extends PureComponent {
  items: TabsProps['items'] = [
    {
      key: '1',
      label: '学员跟进',
      children: (
        <div className="tab-children-1-container">
          <div className="tab-children-1-item tab-children-1-item--1">
            <div className="count">17</div>
            <div className="title">待预约</div>
          </div>
          <div className="tab-children-1-item tab-children-1-item--2">
            <div className="count">20</div>
            <div className="title">已预约</div>
          </div>
          <div className="tab-children-1-item tab-children-1-item--3">
            <div className="count">6</div>
            <div className="title">已试课</div>
          </div>
        </div>
      ),
    },
    {
      key: '2',
      label: '费用预警',
      children: (
        <div className="tab-children-2-container">
          <Card
            size="small"
            className="tab-children-2-item"
          >
            <div className="title">即将到期</div>
            <div className="count">2</div>
          </Card>
          <Card
            size="small"
            className="tab-children-2-item"
          >
            <div className="title">已经结束</div>
            <div className="count">8</div>
          </Card>
          <Card
            size="small"
            className="tab-children-2-item"
          >
            <div className="title">已经欠费</div>
            <div className="count">13</div>
          </Card>
          <Card
            size="small"
            className="tab-children-2-item"
          >
            <div className="title">缴费不足</div>
            <div className="count">5</div>
          </Card>
        </div>
      ),
    },
  ];

  onChange = (date: Dayjs) => {
    console.log('onChange:', date);
  };

  onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log('onPanelChange:', value.format('YYYY-MM-DD'), mode);
  };

  render() {

    return (
      <div className="index-conatainer">
        <div className="index-left">
          <Card size="small">
            <Calendar
              onChange={this.onChange}
              onPanelChange={this.onPanelChange}
            />
          </Card>
        </div>
        <Card
          size="small"
          className="index-right"
        >
          <Tabs
            defaultActiveKey="1"
            items={this.items}
          />
          <div>abc</div>
        </Card>
      </div>
    );
  }
}

export default Index;
