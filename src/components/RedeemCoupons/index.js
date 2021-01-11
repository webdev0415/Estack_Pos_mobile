import React, { useState } from 'react';
import _ from 'lodash';

import CouponItem from './CouponItem';
import EmptyBlock from './emptyBlock';

const RedeemCoupon = (props) => {
  const {
    coupons,
    onDenyCoupon,
    goToScanCoupon,
    showAllCoupons,
  } = props;

  const [selectedCoupon, setCoupon] = useState(coupons.length - 1);

  const approveCoupon = (uuid) => goToScanCoupon(uuid);
  const denyCoupon = (uuid) => onDenyCoupon({ uuid });

  const renderCoupons = () => {
    const redeemedArray = coupons.filter(item => item.status === 'REDEEMED');
    if (redeemedArray.length > 0) {
    return redeemedArray.map((item, index) => {
        if (showAllCoupons) {
          return (
            <CouponItem
              index={index}
              uuid={item.uuid}
              cost={item.cost}
              setCoupon={setCoupon}
              denyCoupon={denyCoupon}
              expireDate={item.expireDate}
              redeemedArray={redeemedArray}
              approveCoupon={approveCoupon}
              selectedCoupon={selectedCoupon}
              showAllCoupons={showAllCoupons}
              name={item.user.fullName}
              avatar={item.user.image ? item.user.image.ref : null}
            />
          )
        } else if (index < 3) {
          return (
            <CouponItem
              index={index}
              uuid={item.uuid}
              cost={item.cost}
              setCoupon={setCoupon}
              denyCoupon={denyCoupon}
              expireDate={item.expireDate}
              redeemedArray={redeemedArray}
              approveCoupon={approveCoupon}
              selectedCoupon={selectedCoupon}
              showAllCoupons={showAllCoupons}
              name={item.user.fullName}
              avatar={item.user.image ? item.user.image.ref : null}
            />
          )
        }
      }
    )
  } else {
    return <EmptyBlock />
  }
};

  return renderCoupons()
};

export default RedeemCoupon;
