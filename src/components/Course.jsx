import { useParams,useLocation  } from 'react-router-dom';

function Course() {
  const params = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const sort = queryParams.get('sort'); // 'asc'
  const page = queryParams.get('page'); // '2'
  const splitt = location.search.split('&')
  console.log('params',params);
  console.log('sort',sort,'page',page)
  return <h1>Course Name: {params.id} - {params.name}</h1>;
}

export default Course;