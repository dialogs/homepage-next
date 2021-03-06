import { connect } from 'react-redux';
import { submitApplicationForm } from '../../actions/forms';
import { ApplyForJobForm } from './ApplyForJobForm';

const mapStateToProps = ({ forms }) => {
  return {
    error: forms.apply.error,
    pending: forms.apply.pending,
    value: forms.apply.value,
  };
};

const mapDispatchToProps = { onSubmit: submitApplicationForm };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplyForJobForm);
