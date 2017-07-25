import React, {Component} from 'react'
import Link from 'next/link'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectLight, selectLastUpdate } from '../selectors';

import AddCount from './add-count'
import Clock from './clock'

// function Page ({error, lastUpdate, light, linkTo, placeholderData, title}) {
//   return (
//     <div>
//       <h1>
//         {title}
//       </h1>
//       <Clock lastUpdate={lastUpdate} light={light} />
//       <AddCount />
//       <nav>
//         <Link href={linkTo}>
//           <a>Navigate</a>
//         </Link>
//       </nav>
//       {placeholderData &&
//         <pre>
//           <code>
//             {JSON.stringify(placeholderData, null, 2)}
//           </code>
//         </pre>}
//       {error &&
//         <p style={{color: 'red'}}>
//           Error: {error.message}
//         </p>}
//     </div>
//   )
// }

class Page extends Component {
  render() {
    console.log(this.props);
    const {error, lastUpdate, light, linkTo, placeholderData, title} = this.props
    return (
      <div>
        <h1>
          {title}
        </h1>
        <Clock lastUpdate={lastUpdate} light={light} />
        <AddCount />
        <nav>
          <Link href={linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
        {placeholderData &&
          <pre>
            <code>
              {JSON.stringify(placeholderData, null, 2)}
            </code>
          </pre>}
        {error &&
          <p style={{color: 'red'}}>
            Error: {error.message}
          </p>}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  lastUpdate: selectLastUpdate(),
  light: selectLight(),
})

// export default connect(state => state)(Page)
export default connect(mapStateToProps)(Page)
