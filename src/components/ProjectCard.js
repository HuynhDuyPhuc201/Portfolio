import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, URL }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={URL} rel="noopener noreferrer" target="_blank">
          <img src={imgUrl} className="img_project" alt=""/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  )
}
