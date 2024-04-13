'use client';

export const Table = ({ data }) => {
  console.log(data)
  return (
    <table>
      <thead>
        <tr>
          <th>Источник</th>
          <th>Тег</th>
          <th>Цель</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.source}</td>
            <td>{item.tag}</td>
            <td>{item.goal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
