import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import { numberWithCommas } from "../utils/NumForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../utils/constants";

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs,
    };
    axios.post(API_URL + "pesanans", pesanan).then((res) => {
      this.props.history.push("/sukses");
    });
  };
  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <>
        {/* Web */}
        <div className="fixed-bottom d-none d-md-block">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="px-4">
              <h4 className="float-right  mt-2">
                Total : Rp. {numberWithCommas(totalBayar)}
              </h4>
              <Button
                variant="primary"
                size="lg"
                className="mb-2 mt-2 mr-2"
                onClick={() => this.submitTotalBayar(totalBayar)}
              >
                <FontAwesomeIcon icon={faShoppingCart} /> Bayar
              </Button>
            </Col>
          </Row>
        </div>

        {/* Mobile */}
        <div className="d-sm-block d-md-none">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="px-4">
              <h4 className="float-right mr-2">
                Total : Rp. {numberWithCommas(totalBayar)}
              </h4>
              <Button
                variant="primary"
                size="lg"
                className="mb-2 mt-4 mr-2"
                onClick={() => this.submitTotalBayar(totalBayar)}
              >
                <FontAwesomeIcon icon={faShoppingCart} /> Bayar
              </Button>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
