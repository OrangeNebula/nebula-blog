import './App.css';
import Logo from './core/components/Logo/Logo';
import Title from './core/components/Typography/Title';
import Subtitle from './core/components/Typography/Subtitle';
import Text from './core/components/Typography/Text';
import Article from './Article/components/Article';

function App() {
  return (
    <div className="App">
      <Logo />
      <Title> This is nebula blog. 블로그 메인 </Title>
      <Subtitle> this is subtitle. 서브 타이틀 </Subtitle>
      <Text> 메인 텍스트 </Text>
      <Article title={'API 설계 가이드'} text={`
        - 호출 시점을 생각해야 한다.
- Request 와 Response 에 대해 생각해야 한다
- 예외 사항들을 생각해야 한다.
    - 어떤 상황에서 400일지, 어떤 상황에서 500일지
- Body data 에 대한 validation 을 생각해야 한다.
    - e.g. 주민번호의 경우 7자리로 픽스되어 있다. 즉 7자리 이상은 들어 올 수 없도록
    - 항상 잘못된 데이터가 들어 올 수 있다라는 가능성을 열어두어야 한다.
    - interface 에 대한 validation (특히 클라이언트)에 대한 rule 을 정하고 validator 로 활용하라.
        - e.g. Joi 나 validatorjs 를 활용하여 미들웨어를 개발한 후 express 에 연결해둘 수 있다.
        - validator 를 활용한다면, 어떤 필드가 어떤 조건에 안맞았는지 알아야 서버사이드에서 에러 메시지를 줄 수 있을것 같은데...
- 데이터 타입이 enum 이라면, 어떤 경우에 어떤 데이터가 노출되는지 '열거' 해야 한다.
- 데이터가 nullable 인지 노출하고, 언제 null 값이 될 수 있는지를 '명시' 해야 한다.
- /A/B/C 등이 있을 때 C가 B의 하위 리소스인지, B가 A의 하위 리소스인지 확인해야 한다.
- 일관된 인터페이스를 유지해야 한다.
    - 어떨 때 POST 이고, 어떨 때 PUT 인지 기준이 일관적이고 명확해야 한다.
    - 원칙을 명확하게 세워야 한다.
- 의미, 도메인을 나타낼 수 있는 필드여야 한다.
    - e.g. 시터 출발위치를 표현할 때, 단순 coordinates 라는 표현보다는 startingPoint 라는 표편이 오히려 도메인 정보를 더 드러내는 표현이라 할 수 있다.
      `}/>

      <hr/>

      <Article title={'Mysql replication'} text={`### [16.3.2 Handling an Unexpected Halt of a Replication Slave](https://dev.mysql.com/doc/refman/5.7/en/replication-solutions-unexpected-slave-halt.html)

### [16.3.6 Improving Replication Performance](https://dev.mysql.com/doc/refman/5.7/en/replication-solutions-performance.html)

As the number of slaves connecting to a master increases, the load, although minimal, also increases, as each slave uses a client connection to the master. Also, as each slave must receive a full copy of the master binary log, the network load on the master may also increase and create a bottleneck.

One way to improve the performance of the replication process is to create a deeper replication structure that enables the master to replicate to only one slave, and for the remaining slaves to connect to this primary slave for their individual replication requirements

→ replication 만 담당하는 slave master 를 따로 두는 방법으로 performance 를 향상시킬 수 있다.

그 외에도 아래와 같은 방법이 존재

- If possible, put the relay logs and the data files on different physical drives. To do this, set the \`[relay_log](https://dev.mysql.com/doc/refman/5.7/en/replication-options-slave.html#sysvar_relay_log)\` system variable to specify the location of the relay log.
- If the slaves are significantly slower than the master, you may want to divide up the responsibility for replicating different databases to different slaves. See [Section 16.3.5, “Replicating Different Databases to Different Slaves”](https://dev.mysql.com/doc/refman/5.7/en/replication-solutions-partitioning.html).
- If your master makes use of transactions and you are not concerned about transaction support on your slaves, use \`MyISAM\` or another nontransactional engine on the slaves. See [Section 16.3.3, “Using Replication with Different Master and Slave Storage Engines”](https://dev.mysql.com/doc/refman/5.7/en/replication-solutions-diffengines.html).
- If your slaves are not acting as masters, and you have a potential solution in place to ensure that you can bring up a master in the event of failure, then you can disable the \`[log_slave_updates](https://dev.mysql.com/doc/refman/5.7/en/replication-options-binary-log.html#sysvar_log_slave_updates)\` system variable on the slaves. This prevents “dumb” slaves from also logging events they have executed into their own binary log.`}/>
    </div>
  );
}

export default App;
