
import getContentServices from '../../services/getContentServices';

async function getHeaderContent ()  {
  return getContentServices.getContent('header_content');
};
export default {getHeaderContent};