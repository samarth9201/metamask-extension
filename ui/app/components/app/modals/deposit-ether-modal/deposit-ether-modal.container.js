import { connect } from 'react-redux'
import { buyEth, hideModal, showModal, hideWarning } from '../../../../store/actions'
import { getSelectedAddress } from '../../../../selectors/selectors'
import DepositEtherModal from './deposit-ether-modal.component'

function mapStateToProps (state) {
  return {
    network: state.metamask.network,
    address: getSelectedAddress(state),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    toWyre: (address) => {
      dispatch(buyEth({ service: 'wyre', address, amount: 0 }))
    },
    toCoinSwitch: (address) => {
      dispatch(buyEth({ service: 'coinswitch', address }))
    },
    hideModal: () => {
      dispatch(hideModal())
    },
    hideWarning: () => {
      dispatch(hideWarning())
    },
    showAccountDetailModal: () => {
      dispatch(showModal({ name: 'ACCOUNT_DETAILS' }))
    },
    toFaucet: (network) => dispatch(buyEth({ network })),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DepositEtherModal)
