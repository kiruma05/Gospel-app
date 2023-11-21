import React from 'react';
import data from './Data';
import Props from "./Props";
import Nav from './Nav';


function Documentary() {
  return (
    <>
    <Nav />
    <div className="container-fluid bg-secondary" style={{ height: "600px", overflowY: "scroll" }}>
    <div className="row">
        {data.map((Documetary) => (
            <Props
                imgsrc={Documetary.imgsrc}
                title={Documetary.title}
                text={Documetary.text}
                btn={Documetary.btn}
                category={Documetary.category}
            />
        ))}
    </div>
</div>
    </>
  )}

  export default Documentary