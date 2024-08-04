package vn.edu.hcmuaf.fit.websubject.payload.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentReqDTO {
    private long amount;
    private String orderInfo;
}
